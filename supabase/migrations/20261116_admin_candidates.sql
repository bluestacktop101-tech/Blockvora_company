-- Let the /admin page read and update career applications.
-- Run once in the Supabase SQL editor:
-- https://supabase.com/dashboard/project/omdcyfewrmcqflfxopqz/sql/new
--
-- Then open /admin and sign in. The first successful sign-in stores the
-- password hash from ADMIN_PASSWORD. Until that happens, nobody can read rows.

create extension if not exists pgcrypto with schema extensions;

alter table public.career_applications
  add column if not exists status text not null default 'new',
  add column if not exists notes text,
  add column if not exists updated_at timestamptz not null default now();

alter table public.career_applications
  drop constraint if exists career_applications_status_check;

alter table public.career_applications
  add constraint career_applications_status_check
  check (status in ('new', 'reviewing', 'interview', 'offer', 'hired', 'rejected'));

create index if not exists career_applications_status_idx
  on public.career_applications (status);

create table if not exists public.admin_credentials (
  id int primary key check (id = 1),
  password_hash text not null
);

alter table public.admin_credentials enable row level security;
revoke all on table public.admin_credentials from public, anon, authenticated;

create or replace function public.is_career_admin()
returns boolean
language plpgsql
stable
security definer
set search_path = public, extensions
as $$
declare
  supplied text;
  ok boolean;
begin
  supplied := nullif(current_setting('request.headers', true)::json->>'x-admin-password', '');
  if supplied is null then
    return false;
  end if;

  select password_hash = crypt(supplied, password_hash)
    into ok
  from public.admin_credentials
  where id = 1;

  return coalesce(ok, false);
end;
$$;

create or replace function public.admin_is_configured()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (select 1 from public.admin_credentials where id = 1);
$$;

create or replace function public.bootstrap_admin_password(new_password text)
returns void
language plpgsql
security definer
set search_path = public, extensions
as $$
begin
  if exists (select 1 from public.admin_credentials where id = 1) then
    raise exception 'already configured';
  end if;
  if new_password is null or char_length(new_password) < 8 then
    raise exception 'password too short';
  end if;

  insert into public.admin_credentials (id, password_hash)
  values (1, crypt(new_password, gen_salt('bf')));
end;
$$;

create or replace function public.admin_password_matches(admin_password text)
returns boolean
language plpgsql
stable
security definer
set search_path = public, extensions
as $$
declare
  ok boolean;
begin
  if admin_password is null or admin_password = '' then
    return false;
  end if;

  select password_hash = crypt(admin_password, password_hash)
    into ok
  from public.admin_credentials
  where id = 1;

  return coalesce(ok, false);
end;
$$;

create or replace function public.admin_list_applications(admin_password text)
returns setof public.career_applications
language plpgsql
security definer
set search_path = public
as $$
begin
  if not public.admin_password_matches(admin_password) then
    raise exception 'unauthorized';
  end if;

  return query
    select *
    from public.career_applications
    order by created_at desc
    limit 500;
end;
$$;

create or replace function public.admin_update_application(
  admin_password text,
  application_id uuid,
  next_status text,
  next_notes text
)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  if not public.admin_password_matches(admin_password) then
    raise exception 'unauthorized';
  end if;
  if next_status not in ('new', 'reviewing', 'interview', 'offer', 'hired', 'rejected') then
    raise exception 'unknown status';
  end if;

  update public.career_applications
  set
    status = next_status,
    notes = nullif(btrim(next_notes), ''),
    updated_at = now()
  where id = application_id;
end;
$$;

create or replace function public.admin_delete_application(
  admin_password text,
  application_id uuid
)
returns text
language plpgsql
security definer
set search_path = public
as $$
declare
  stored_path text;
begin
  if not public.admin_password_matches(admin_password) then
    raise exception 'unauthorized';
  end if;

  select resume_path into stored_path
  from public.career_applications
  where id = application_id;

  delete from public.career_applications
  where id = application_id;

  return stored_path;
end;
$$;

revoke all on function public.is_career_admin() from public;
revoke all on function public.admin_is_configured() from public;
revoke all on function public.bootstrap_admin_password(text) from public;
revoke all on function public.admin_password_matches(text) from public, anon, authenticated;
revoke all on function public.admin_list_applications(text) from public;
revoke all on function public.admin_update_application(text, uuid, text, text) from public;
revoke all on function public.admin_delete_application(text, uuid) from public;
grant execute on function public.is_career_admin() to anon, authenticated;
grant execute on function public.admin_is_configured() to anon, authenticated;
grant execute on function public.bootstrap_admin_password(text) to anon, authenticated;
grant execute on function public.admin_list_applications(text) to anon, authenticated;
grant execute on function public.admin_update_application(text, uuid, text, text) to anon, authenticated;
grant execute on function public.admin_delete_application(text, uuid) to anon, authenticated;

grant select, update, delete on table public.career_applications to anon, authenticated;

drop policy if exists "Admins can read career applications" on public.career_applications;
create policy "Admins can read career applications"
  on public.career_applications
  for select
  to anon, authenticated
  using (public.is_career_admin());

drop policy if exists "Admins can update career applications" on public.career_applications;
create policy "Admins can update career applications"
  on public.career_applications
  for update
  to anon, authenticated
  using (public.is_career_admin())
  with check (public.is_career_admin());

drop policy if exists "Admins can delete career applications" on public.career_applications;
create policy "Admins can delete career applications"
  on public.career_applications
  for delete
  to anon, authenticated
  using (public.is_career_admin());

drop policy if exists "Admins can read career resumes" on storage.objects;
create policy "Admins can read career resumes"
  on storage.objects
  for select
  to anon, authenticated
  using (bucket_id = 'career-resumes' and public.is_career_admin());

drop policy if exists "Admins can delete career resumes" on storage.objects;
create policy "Admins can delete career resumes"
  on storage.objects
  for delete
  to anon, authenticated
  using (bucket_id = 'career-resumes' and public.is_career_admin());

alter table public.career_applications
  add column if not exists applicant_ip text,
  add column if not exists applicant_os text,
  add column if not exists wallet_installed boolean;

notify pgrst, 'reload schema';
