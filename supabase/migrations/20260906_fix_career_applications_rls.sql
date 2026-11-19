-- Fix RLS so the public apply form (anon key) can insert rows.
-- Run in Supabase SQL Editor:
-- https://supabase.com/dashboard/project/omdcyfewrmcqflfxopqz/sql/new

-- Ensure table exists (no-op if already created)
create table if not exists public.career_applications (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  role text,
  name text not null,
  email text not null,
  linkedin text,
  github text,
  work_location text not null,
  resume_path text,
  resume_url text,
  phone text,
  telegram text,
  cover_letter text,
  blockchain_project text
);

alter table public.career_applications enable row level security;

-- Table privileges (RLS still applies; without GRANT, insert fails)
grant usage on schema public to anon, authenticated;
grant insert on table public.career_applications to anon, authenticated;

-- Recreate insert policy for the publishable (anon) key
drop policy if exists "Anyone can submit career applications" on public.career_applications;
drop policy if exists "Enable insert for anon" on public.career_applications;
drop policy if exists "Enable insert for all users" on public.career_applications;

create policy "Anyone can submit career applications"
  on public.career_applications
  for insert
  to anon, authenticated
  with check (true);

-- Storage bucket + upload policy (resume uploads)
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'career-resumes',
  'career-resumes',
  false,
  10485760,
  array[
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  ]
)
on conflict (id) do update set
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "Anyone can upload career resumes" on storage.objects;
create policy "Anyone can upload career resumes"
  on storage.objects
  for insert
  to anon, authenticated
  with check (bucket_id = 'career-resumes');
