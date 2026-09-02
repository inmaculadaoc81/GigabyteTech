GIGABYTETECH ONE PAGE

REVISIÓN ADICIONAL (checklist unificado de la familia, a petición del cliente — repo 9/48):
- BUG REAL — enlace de Cal.com desactualizado. Actualizado a
  https://cal.com/kelatos/30min?embed=true&theme=light&attendeePhoneNumber=%2B34&overlayCalendar=true.
- Verificado: el correo soporte@kelatos.com no aparece visible.
- BUG REAL — el mensaje prellenado de WhatsApp decía "¡Hola Kelatos!".
  Corregido a "¡Hola GigabyteTech!" en el CTA del hero y en el botón
  flotante.
- Verificado: el menú móvil (#mainMenu) ya cierra correctamente al
  seleccionar cualquier enlace.
- Verificado: sin iconos ni imágenes con proporciones fijas
  incorrectas.
- BUG REAL — el H1 en móvil estaba en 40px, muy por debajo del
  estándar de 48px pedido por el cliente. Corregido a 48px.
- BUG REAL — botones del hero (.cta) con border-radius de 15px y sin
  estado hover. Aumentado a border-radius:999px. Aquí los tres
  botones (whatsapp, pickup, phone) ya tenían fondo sólido, pero el de
  teléfono es casi negro (#0d1217) — oscurecerlo más con brightness()
  no se habría notado, así que en su lugar se ha aclarado ligeramente
  el fondo y el borde en hover para dar la misma sensación de "esto
  es un botón"; whatsapp/pickup sí usan brightness(.88) para
  oscurecerse, al tener colores claros.

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

REVISIÓN ADICIONAL (checklist unificado de la familia, a petición del cliente):
- H1 era similar en estructura al de ToshibaTech ("no enciende.
  Diagnóstico gratuito..."). Reescrito con síntoma distinto: "Tu
  Gigabyte va lento o se apaga solo. Lo revisamos." (10 palabras).
- BUG REAL — dos textos decorativos gigantes sin reducción de tamaño
  en móvil/tablet: ".problems:before" ("GIGABYTE", 170px) y
  ".data-art:before" ("DATA", 120px). Añadida reducción en tablet
  (100px/80px) y móvil (60px/50px).
- BUG REAL — el formulario no tenía ninguna casilla de consentimiento
  de política de privacidad. Añadida, con enlace a
  https://kelatos.com/privacy-policy/ en azul y subrayado.
- Añadida franja de aviso de servicio técnico independiente debajo
  del menú (no existía).
- Añadido "Sábados, domingos y días festivos estamos cerrados" debajo
  del horario.
- Botón "Atención Telefónica..." sin icono, a diferencia del de
  WhatsApp. Añadido (verificado con cuidado el cierre de </a>).
- Verificado: schema.org ya usaba correctamente el teléfono de la
  caja de información; formulario correctamente conectado a
  /api/contacto.

REVISIÓN ADICIONAL (nueva regla de menú móvil, a petición del cliente):
- BUG REAL — la franja de aviso de independencia estaba dentro de
  <header>. Movida fuera de <header>, como hermana justo después de
  él y antes del hero: sigue siendo la misma franja amarilla de ancho
  completo.
- Verificado: el header (.header{position:sticky;top:0}) ya se
  mantenía fijo/pegado arriba al hacer scroll; no requería cambios.
- Verificado de nuevo: el checklist de 7 puntos ya estaba aplicado de
  una pasada anterior; no requería cambios.
