# Redes Salón 66

Web interna para gestionar las redes sociales del salón: calendario de contenido, lista de ideas, día a día de grabaciones, generador de ideas y guiones, enlaces a Google Drive y apuntes del equipo.

- Inicio: calendario, lista de ideas, vídeos en Drive (con lo pendiente de grabar) y generadores (ideas y guiones).
- Se abre desde el enlace de GitHub Pages y se entra con email y contraseña.
- Los datos se guardan en Supabase. Los usuarios se crean en Supabase → Authentication → Users.
- `contenido.js` tiene el contenido profesional por temas (consejos, causas, mitos, rutina...). Para añadir un tema, copia uno y cambia los textos.
- `supabase.sql` contiene las tablas (solo hace falta ejecutarlo una vez).
