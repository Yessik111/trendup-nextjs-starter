# TrendUp Starter Kit

Este kit incluye:
- Paleta de colores (modo claro y oscuro)
- Tipografía recomendada
- Componentes UI básicos (botones, chips, inputs) en PNG
- Esquema inicial de base de datos (CSV + JSON)
- Guía rápida para activar modo oscuro en Bubble

## Cómo usar (Bubble)
1. Crea una app nueva en Bubble y ve a **Settings > General**.
2. En **Styles**, crea variables de color usando los valores de `branding/colors.json`.
3. Sube el logo (SVG/PNG) e importa los componentes desde `ui_components/` como referencias de diseño.
4. Crea los Data Types usando `database/schema.csv` o copia desde `database/schema.json`.
5. Para modo oscuro: duplica los estilos y cambia los colores por los de `dark_mode`. Usa un **custom state** `isDark` en la página y cambia estilos con Condicionales (When isDark is true...).

## Estructura UI sugerida
- Header: logo TrendUp (negro + 'Up' violeta), search, notificaciones.
- Feed: tarjetas blancas con borde gris #E0E0E0, botones primarios violeta #7D3C98.
- Reels: visor de video vertical, controles en negro/blanco con acento violeta.
- Marketplace: grilla de productos con filtros arriba.
- Perfil: avatar, bio corta, tabs (Posts | Reels | Marketplace).

¡Éxitos con tu lanzamiento!
