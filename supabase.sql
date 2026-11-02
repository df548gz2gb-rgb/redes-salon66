-- ============================================================
--  Redes Salón 66 — base de datos
--  Supabase → SQL Editor → New query → pega todo → Run (una vez)
-- ============================================================
create table if not exists public.items (
  id          text primary key,
  data        jsonb not null,
  updated_at  timestamptz default now()
);
create table if not exists public.settings (
  id    text primary key,
  data  jsonb not null
);

alter table public.items    enable row level security;
alter table public.settings enable row level security;

-- Solo quien ha iniciado sesión puede ver y editar
drop policy if exists "equipo items" on public.items;
create policy "equipo items" on public.items
  for all to authenticated using (true) with check (true);
drop policy if exists "equipo settings" on public.settings;
create policy "equipo settings" on public.settings
  for all to authenticated using (true) with check (true);

-- Cambios en directo entre móviles
alter publication supabase_realtime add table public.items, public.settings;

-- Apuntes (chat de notas entre el equipo)
create table if not exists public.notes (
  id            uuid primary key default gen_random_uuid(),
  text          text not null,
  author_email  text,
  author_name   text,
  item_id       text,
  created_at    timestamptz default now()
);
alter table public.notes enable row level security;
drop policy if exists "equipo notes" on public.notes;
create policy "equipo notes" on public.notes
  for all to authenticated using (true) with check (true);
alter publication supabase_realtime add table public.notes;
