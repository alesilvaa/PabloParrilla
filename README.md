# Pablo Parrilla

Landing page estática en Astro para un servicio de parrillero a domicilio en Gran Asunción.

## Desarrollo

```bash
npm install
npm run dev
```

Para validar producción: `npm run build`. El resultado queda en `dist/`.

## Editar contenido

Todo el contenido editable vive en `src/config/site.ts`:

- Reemplazá `whatsapp` por el número real en formato `595XXXXXXXXX`, sin `+` ni espacios.
- Cambiá textos, menú, precios, paquetes, preguntas, chats y usuario de Instagram en ese mismo archivo.
- La foto principal es `src/assets/pablo-parrilla.jpg`. Reemplazala conservando el nombre o actualizá el import en `Hero.astro` y `Gallery.astro`.
- La galería usa recortes temporales de la foto principal. Para fotos reales, importá cada archivo en `Gallery.astro` y asociá los datos desde `site.ts`.
- La imagen social temporal está en `public/images/og-placeholder.svg`; reemplazala por una imagen final de 1200 × 630 y actualizá las etiquetas en `Base.astro`.

## WhatsApp y atribución

El formulario valida los campos, formatea la fecha como `dd/mm/aaaa` y abre WhatsApp sin backend. `?utm_source=instagram` o `?src=qr` se agrega al final del mensaje.

## Meta Pixel

En `src/config/site.ts`, cargá el ID y cambiá `metaPixelEnabled` a `true`. Se dispara `Lead` al enviar la comanda o tocar el botón flotante.

## Deploy

Vercel detecta Astro y usa `vercel.json`. En Netlify, elegí `npm run build` como comando y `dist` como directorio publicado.
