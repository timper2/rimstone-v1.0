/*
# Create contact submissions table

1. New Tables
   - `contact_submissions`
     - `id` (uuid, primary key) - unique identifier for each inquiry
     - `name` (text, not null) - name of the person contacting
     - `email` (text, not null) - reply email address
     - `phone` (text) - optional phone number
     - `course_interest` (text) - which course/service they are interested in
     - `message` (text, not null) - the enquiry message
     - `created_at` (timestamptz) - when the inquiry was submitted

2. Security
   - Enable RLS on `contact_submissions`.
   - Allow anyone (anon + authenticated) to INSERT a submission, since this is a
     public contact form on a website with no sign-in.
   - No SELECT/UPDATE/DELETE policies are added: submissions form a private inbox
     and are intentionally NOT readable by public website visitors.

3. Notes
   1. This is a single-tenant, no-auth website. Visitors submit inquiries only.
   2. Reading submissions is an administrative task handled outside the public app.
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text DEFAULT '',
  course_interest text DEFAULT '',
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anyone_can_submit_inquiry" ON contact_submissions;
CREATE POLICY "anyone_can_submit_inquiry" ON contact_submissions FOR INSERT
  TO anon, authenticated WITH CHECK (true);
