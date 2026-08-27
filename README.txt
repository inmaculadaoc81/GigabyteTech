GIGABYTETECH ONE PAGE

Dominio:
https://gigatecnology.com.es/

Teléfono caja de información:
+34 910 05 90 35

Teléfono de botones:
+34 914 46 85 03

Diagnóstico:
GRATUITO.

Variables SMTP compartidas en Vercel:
SMTP_HOST=cp7124.webempresa.eu
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=soporte@kelatos.com
SMTP_PASS=[configurada únicamente en Vercel]
CONTACT_EMAIL=soporte@kelatos.com

El correo NO aparece visible en la web; solo se utiliza en backend.

Correcciones incluidas:
1. Menú móvil con JavaScript funcional y clase .links.open.
2. El botón del chat usa .chat-window-toggle a bottom:96px.
3. La ventana del chat excluye explícitamente cualquier clase con "toggle":
   [class*="chat-window"]:not([class*="toggle"])
   para evitar que la regla de la ventana desplace el botón.
4. Ventana del chat: bottom:166px y z-index 10100.
5. Botón chat: z-index 10060.
6. WhatsApp: z-index 10020.

Google Analytics:
G-4Y6JR78X1Q

REVISIÓN (fixes adicionales aplicados):
- Ya tenía menú móvil funcional, colisión del chatbot corregida y
  schema.org LocalBusiness (documentado arriba); no se ha tocado.
- Añadido borde blanco (border:1px solid #fff!important) al botón del
  chat, que faltaba pese a tener el resto del posicionamiento correcto.
- Botón de teléfono del menú (.navcall): acortado a solo el número
  (mismo problema de línea partida visto en otros repos de la familia);
  añadido white-space:nowrap.
- Añadida sección de contenido SEO propio (#guia), enlazada en el menú.
- Banner de cookies: no existía. Añadido (Aceptar / Rechazar / Política
  de privacidad → https://kelatos.com/privacy-policy/), con diseño
  apilado a ancho completo en móvil.

REDIRECCIÓN DE URLS ANTIGUAS:
Este sitio era antes multipágina (tenía /modelos/..., eliminados en
commits anteriores al pasar a one-page). Añadido middleware.mjs:
cualquier URL que no sea "/" redirige (301) a la home. Añadida la
dependencia "@vercel/functions" en package.json.

REVISIÓN ADICIONAL (esta pasada):
- H1 no seguía la regla final de la familia: era largo (~21 palabras)
  y terminaba en planteamiento abierto ("y qué pasará con tus
  archivos"), sin ser una frase 100% afirmativa. Reescrito: "Tu
  Gigabyte no enciende. Diagnóstico gratuito, sin compromiso."
  (8 palabras).
- Verificado: schema.org ya usaba correctamente el teléfono de la caja
  de información (+34 910 05 90 35), no el número compartido de los
  botones; borde del chat, sección SEO, banner de cookies y dominio ya
  correctos. No se ha tocado nada más.
