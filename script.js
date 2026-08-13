const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.nav');

menuButton?.addEventListener('click', () => {
  const open = navigation?.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(Boolean(open)));
});

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
} else {
  document.querySelectorAll('.reveal').forEach((element) => element.classList.add('visible'));
}

const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');

if (form) {
  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    if (!form.reportValidity()) return;

    const button = form.querySelector('button[type="submit"]');
    const originalButtonHtml = button?.innerHTML || 'Enviar consulta';

    if (button) {
      button.disabled = true;
      button.textContent = 'Enviando…';
    }

    if (status) {
      status.textContent = 'Enviando consulta…';
    }

    const payload = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch('/api/contacto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      let data = {};
      try {
        data = await response.json();
      } catch (_) {}

      if (!response.ok) {
        console.error('GigabyteTech formulario:', data);
        throw new Error(data.code || 'EMAIL_SEND_FAILED');
      }

      form.reset();
      if (status) {
        status.textContent = '✓ Consulta enviada correctamente.';
      }
    } catch (error) {
      console.error('GigabyteTech formulario:', error);
      if (status) {
        status.textContent = 'No se pudo enviar la consulta. Puedes llamarnos o escribirnos por WhatsApp.';
      }
    } finally {
      if (button) {
        button.disabled = false;
        button.innerHTML = originalButtonHtml;
      }
    }
  });
}
