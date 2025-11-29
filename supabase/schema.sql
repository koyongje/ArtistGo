-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Works Table
create table public.works (
  id uuid not null default gen_random_uuid(),
  created_at timestamp with time zone not null default now(),
  title text not null,
  media_type text not null, -- 'image', 'video', 'installation'
  description text,
  year integer,
  tags text[], -- Array of strings
  images text[], -- Array of image URLs
  video_url text,
  featured boolean default false,
  constraint works_pkey primary key (id)
);

-- Exhibitions Table
create table public.exhibitions (
  id uuid not null default gen_random_uuid(),
  created_at timestamp with time zone not null default now(),
  title text not null,
  role text, -- 'solo', 'group', 'curator'
  location text,
  date date,
  description text,
  external_links text[], -- Array of URLs
  constraint exhibitions_pkey primary key (id)
);

-- Profile Table (Usually single row)
create table public.profile (
  id uuid not null default gen_random_uuid(),
  created_at timestamp with time zone not null default now(),
  bio_ko text,
  bio_en text,
  profile_image text,
  cv_file_url text,
  social_links jsonb, -- { "instagram": "...", "email": "..." }
  constraint profile_pkey primary key (id)
);

-- Media Archive Table
create table public.media_archive (
  id uuid not null default gen_random_uuid(),
  created_at timestamp with time zone not null default now(),
  type text not null, -- 'press', 'interview', 'documentation'
  title text not null,
  images text[],
  video_urls text[],
  description text,
  constraint media_archive_pkey primary key (id)
);

-- RLS Policies (Row Level Security)
-- Enable RLS on all tables
alter table public.works enable row level security;
alter table public.exhibitions enable row level security;
alter table public.profile enable row level security;
alter table public.media_archive enable row level security;

-- Create policies for public read access
create policy "Enable read access for all users" on public.works for select using (true);
create policy "Enable read access for all users" on public.exhibitions for select using (true);
create policy "Enable read access for all users" on public.profile for select using (true);
create policy "Enable read access for all users" on public.media_archive for select using (true);

-- Create policies for authenticated insert/update/delete (Assuming the artist logs in)
-- For simplicity in this prototype, we allow full access to authenticated users.
create policy "Enable full access for authenticated users" on public.works for all using (auth.role() = 'authenticated');
create policy "Enable full access for authenticated users" on public.exhibitions for all using (auth.role() = 'authenticated');
create policy "Enable full access for authenticated users" on public.profile for all using (auth.role() = 'authenticated');
create policy "Enable full access for authenticated users" on public.media_archive for all using (auth.role() = 'authenticated');

-- Storage Buckets (Run these in Storage section or via SQL if supported by extensions)
-- insert into storage.buckets (id, name, public) values ('portfolio', 'portfolio', true);
