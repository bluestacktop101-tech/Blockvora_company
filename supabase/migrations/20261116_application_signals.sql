-- Save the applicant IP, operating system, and wallet-extension flag on each career application.
-- Run in the Supabase SQL editor:
-- https://supabase.com/dashboard/project/omdcyfewrmcqflfxopqz/sql/new

alter table public.career_applications
  add column if not exists applicant_ip text,
  add column if not exists applicant_os text,
  add column if not exists wallet_installed boolean;

notify pgrst, 'reload schema';
