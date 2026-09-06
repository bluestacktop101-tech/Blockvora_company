-- Career applications (Blockvora apply form)
-- Run in Supabase SQL Editor: https://supabase.com/dashboard/project/omdcyfewrmcqflfxopqz/sql

create table if not exists public.career_applications (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  role text,
  name text not null,
  email text not null,
  resume_path text,
  resume_url text,
  linkedin text,
  github text,
  phone text,
  telegram text,
  work_location text not null,
  cover_letter text,
  blockchain_project text
);

create index if not exists career_applications_created_at_idx
  on public.career_applications (created_at desc);

create index if not exists career_applications_email_idx
  on public.career_applications (email);

alter table public.career_applications enable row level security;

-- Public apply form can insert; no public read/update/delete
drop policy if exists "Anyone can submit career applications" on public.career_applications;
create policy "Anyone can submit career applications"
  on public.career_applications
  for insert
  to anon, authenticated
  with check (true);

-- Private resume storage
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

-- Resumes stay private. View files in Dashboard → Storage → career-resumes
-- (or with the service role). No public SELECT policy on purpose.
