# TrendUp – Blueprint técnico (PWA + Supabase + Cloudinary + Stripe)

Este paquete te guía para lanzar **TrendUp** como **Web App (PWA)** sin gastar dinero al inicio.
Arquitectura pensada para planes gratis: **Vercel** (hosting), **Supabase** (auth/BD/storage),
**Cloudinary** (media), **Stripe** (modo prueba), **OneSignal** (notificaciones opcional).

## Módulos del MVP
- Registro/Login (email + contraseña) con Supabase Auth.
- Feed estilo Facebook: texto, foto, video corto.
- Reels básicos (video vertical corto).
- Marketplace (crear/editar/listar productos).
- Propinas/Monedas internas (saldo virtual) + Stripe en modo prueba.
- Anuncios internos (inserción manual en feed).
- PWA instalable (manifest + service worker).

## Estructura
- `/db/supabase_schema.sql` – Tablas y relaciones.
- `/api/openapi.yaml` – Endpoints mínimos (si usas edge functions).
- `/config/.env.example` – Variables de entorno.
- `/pwa/manifest.webmanifest` y `/pwa/service-worker.js` – PWA lista.
- `/guides/*` – Despliegue en Vercel, Cloudinary, Stripe, RLS, modelo de datos.
- `/starter/*` – Proyecto estático listo para subir a Vercel (demo PWA funcional).

## Pasos rápidos
1. Crea cuentas: Vercel, Supabase, Cloudinary, Stripe.
2. En Supabase: crea un proyecto y ejecuta `/db/supabase_schema.sql`.
3. Copia `/config/.env.example` a `.env.local` y rellena claves (si usas framework).
4. Sube `/starter` a Vercel tal cual (sube la carpeta completa).
5. Activa Stripe en modo prueba y Cloudinary para media.
6. Cuando quieras migrar a Next.js, usa la misma estructura y envs.

> Última actualización: 2025-08-12
