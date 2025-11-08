document.addEventListener('DOMContentLoaded', () => {
  const services = [
    {
      title: 'Resonancia magnética',
      description: 'Equipo de alto campo. Indicaciones pre-estudio y resultados online. Consulta coberturas y tiempos.',
      link: 'servicios/resonancia.html',
      image: 'assets/images/services/resonancia.jpg'
    },
    {
      title: 'Ecografía',
      description: 'Ecografías generales y doppler. Preparaciones claras por tipo de estudio.',
      link: 'servicios/ecografia.html',
      image: 'assets/images/services/ecografia.jpg'
    },
    {
      title: 'Cardiología',
      description: 'ECG, Holter y ergometría. Informe profesional y seguimiento.',
      link: 'servicios/cardiologia.html',
      image: 'assets/images/services/cardiologia.jpg'
    },
    {
      title: 'Traumatología',
      description: 'Consultas y estudios complementarios. Agenda por sede.',
      link: 'servicios.html#traumatologia',
      image: 'assets/images/services/traumatologia.jpg'
    },
    {
      title: 'Ginecología',
      description: 'Controles, PAP, colposcopía y estudios por imágenes.',
      link: 'servicios.html#ginecologia',
      image: 'assets/images/services/ginecologia.jpg'
    },
    {
      title: 'Pediatría',
      description: 'Consultas programadas y guardia según sede. Derivaciones y estudios.',
      link: 'servicios.html#pediatria',
      image: 'assets/images/services/pediatria.jpg'
    }
  ];

  const servicesContainer = document.querySelector('#servicios .grid');
  if (servicesContainer) {
    servicesContainer.innerHTML = services.map(service => `
      <article class="rounded-2xl border border-slate-100 p-6 shadow-soft hover:shadow transition">
        <div class="h-36 rounded-xl mb-4 bg-cover bg-center" style="background-image: url('${service.image}')"></div>
        <h3 class="text-xl font-semibold">${service.title}</h3>
        <p class="mt-2 text-slate-600 text-sm">${service.description}</p>
        <div class="mt-4 flex items-center gap-2">
          <a href="${service.link}" class="text-primary font-medium">Ver servicio →</a>
        </div>
      </article>
    `).join('');
  }

  const howToSteps = [
    {
      title: 'Elegí sede o videoconsulta',
      description: 'Berazategui o Lomas. También orientación por videollamada.',
      icon: '<svg class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>'
    },
    {
      title: 'Sacá turno',
      description: 'Turnos online o por WhatsApp. Confirmación inmediata.',
      icon: '<svg class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4m-3-4h3m-3 4h3m-6 4h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>'
    },
    {
      title: 'Presentá tu obra social',
      description: 'IOMA y PAMI 100% sin copagos. Otras coberturas disponibles.',
      icon: '<svg class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>'
    }
  ];

  const howToContainer = document.querySelector('#como-atenderte .grid');
  if (howToContainer) {
    howToContainer.innerHTML = howToSteps.map(step => `
      <div class="rounded-2xl bg-white p-6 shadow-soft">
        <div class="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">${step.icon}</div>
        <h3 class="font-semibold">${step.title}</h3>
        <p class="mt-2 text-sm text-slate-600">${step.description}</p>
      </div>
    `).join('');
  }
});