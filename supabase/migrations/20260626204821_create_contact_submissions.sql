/*
# Create contact_submissions table

## Purpose
Stores consultation request submissions from the Teranode1 contact form.
This is a public, no-auth website — visitors submit the form anonymously,
so the table is single-tenant with anon-accessible INSERT only.

## New Tables
- `contact_submissions`
  - `id` (uuid, primary key)
  - `name` (text, not null) — submitter's full name
  - `company` (text) — submitter's company/organization
  - `email` (text, not null) — submitter's email address
  - `phone` (text) — submitter's phone number
  - `industry` (text) — selected industry sector
  - `project_goals` (text) — brief description of project goals
  - `message` (text) — full message body
  - `created_at` (timestamptz, default now()) — submission timestamp

## Security
- RLS enabled on `contact_submissions`.
- INSERT policy for `anon, authenticated` — any visitor can submit a consultation request.
- No SELECT/UPDATE/DELETE policies — submissions are write-only from the public
  frontend; they are managed via the Supabase dashboard (service role) on the backend.

## Notes
1. This is a no-auth public site; the anon-key client needs INSERT access.
2. No user_id column or auth.users FK — no sign-in flow exists.
3. Only INSERT is exposed publicly to minimize attack surface.
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  company text,
  email text NOT NULL,
  phone text,
  industry text,
  project_goals text,
  message text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact_submissions" ON contact_submissions;
CREATE POLICY "anon_insert_contact_submissions" ON contact_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
