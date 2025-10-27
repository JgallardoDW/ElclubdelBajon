# Club del Bajón — Sitio de pedidos
Archivos incluidos:
- index.html — estructura y estilos (Tailwind CDN)
- app.js — lógica del catálogo, combos, buscador, carrito, WhatsApp y (opcional) Mercado Pago

## Uso rápido
1. Abrí `index.html` con Live Server (o similar).
2. Editá el número de WhatsApp en `app.js` → `WHATSAPP_DEST`.
3. (Opcional) Mercado Pago: mantené el SDK en el <head> y setea en el navegador:
   localStorage.setItem('cb_mp_pk','TU_PUBLIC_KEY')
   localStorage.setItem('cb_mp_pref','TU_PREFERENCE_ID')
