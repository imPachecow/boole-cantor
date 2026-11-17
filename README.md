# Boole & Cantor · Del cero y el uno al infinito

Sitio de divulgación hecho con **[Astro](https://astro.build)** sobre **George Boole (1815–1864)**, creador del álgebra booleana, y **Georg Cantor (1845–1918)**, fundador de la teoría de conjuntos. Proyecto final de la electiva *Matemáticos de la historia con IA*.

## Secciones
1. Inicio · 2. Biografía · 3. Línea de tiempo · 4. Aportes (ejercicios resueltos) · 5. Impacto hoy · 6. Podcast (voz IA) · 7. Juego (trivia) · 8. Datos curiosos · 9. Fuentes APA · 10. Uso de IA

**Extras:** circuito lógico interactivo, demostración del argumento diagonal y entrevista simulada (chatbot).

## Estructura
```
src/
├── components/   # una sección = un componente (.astro)
├── data/         # contenido editable: línea de tiempo, quiz, podcast, fuentes, chatbot
├── layouts/      # Layout.astro (head, nav, footer)
├── pages/        # index.astro arma la página
└── styles/       # global.css
public/           # favicon y (opcional) podcast.mp3
.github/workflows/deploy.yml   # compila y publica en GitHub Pages
```

## Ejecutar en local
```bash
npm install
npm run dev      # http://localhost:4321
```

## Publicar en GitHub Pages
1. Sube este proyecto a un repositorio en la rama `main`.
2. En el repo: **Settings → Pages → Source: GitHub Actions**.
3. Cada `push` a `main` publica el sitio en `https://TU-USUARIO.github.io/NOMBRE-DEL-REPO/`.

Opcional: guarda un audio como `public/podcast.mp3` y aparecerá un reproductor en la sección Podcast.
