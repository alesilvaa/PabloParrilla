export const site = {
  businessName: 'Pablo Parrilla',
  whatsapp: '595985934591',
  instagram: 'pabloparrilla', // TODO: reemplazar por el usuario real
  serviceArea: 'Gran Asunción, Paraguay',
  seo: {
    title: 'Pablo Parrilla | Parrillero a domicilio en Gran Asunción',
    description: 'Parrillero a domicilio en Gran Asunción. Vos ponés la mesa; Pablo lleva el fuego, la carne y el oficio.',
  },
  hero: {
    eyebrow: '¡Mba’éichapa!',
    title: 'Fuego lento. Mesa llena.',
    subtitle: 'Voy hasta tu casa, enciendo la parrilla y me ocupo de que cada corte llegue a punto.',
    cta: 'Pedir mi presupuesto',
    photoAlt: 'Pablo Parrilla sosteniendo un costillar recién asado frente a la parrilla',
  },
  ticker: ['Parrillero a domicilio', 'Asados con alma', 'Gran Asunción', 'Cumples y encuentros', 'Fuego de verdad'],
  steps: [
    { title: 'Me contás', text: 'Fecha, lugar, cantidad de personas y qué tenés ganas de comer.' },
    { title: 'Te cotizo', text: 'Armo una propuesta clara, sin vueltas y a la medida de tu mesa.' },
    { title: 'Prendo fuego', text: 'Llego, cocino y sirvo. Vos disfrutás con tu gente.' },
  ],
  menu: [
    { name: 'Chorizo artesanal', price: 'Gs. —' },
    { name: 'Costilla vacuna', price: 'Gs. —' },
    { name: 'Vacío', price: 'Gs. —' },
    { name: 'Colita y tapa cuadril', price: 'Gs. —' },
  ],
  packages: [
    { name: 'Clásico', description: 'Los infaltables de la parrilla, guarniciones y servicio.', price: 'Desde Gs. —', featured: false },
    { name: 'Premium', description: 'Cortes seleccionados, entradas, guarniciones y servicio completo.', price: 'Desde Gs. —', featured: true },
    { name: 'Evento', description: 'Una comanda hecha a medida para tu cantidad de invitados.', price: 'A medida', featured: false },
  ],
  gallery: [
    { image: 'parrillero', caption: 'El fuego en buenas manos' },
    { image: 'parrillero', caption: 'Costillar con paciencia' },
    { image: 'parrillero', caption: 'Mesa lista, gente contenta' },
  ],
  chats: [
    { from: 'client', text: 'Pablo, ¡salió todo espectacular! La carne en su punto 👏', time: '22:41' },
    { from: 'pablo', text: '¡Qué alegría! Gracias por confiarme la parrilla. 🔥', time: '22:43' },
    { from: 'client', text: 'La próxima ya sabemos a quién llamar.', time: '22:44' },
  ],
  faq: [
    { question: '¿Con cuánto tiempo conviene reservar?', answer: 'Cuanto antes, mejor. Para fines de semana y fechas especiales, consultame con al menos dos semanas de anticipación.' },
    { question: '¿Llevás parrilla y utensilios?', answer: 'Lo definimos según el lugar. En la cotización te detallo qué llevo y qué necesitamos tener disponible.' },
    { question: '¿Hasta dónde llegás?', answer: 'Trabajo en Gran Asunción. Si tu evento queda un poco más lejos, escribime y vemos la logística.' },
    { question: '¿El precio incluye la carne?', answer: 'Puedo cotizar el servicio completo o solo la mano del asador. La propuesta queda detallada antes de reservar.' },
  ],
  eventTypes: ['Cumpleaños', 'Reunión familiar', 'Evento de empresa', 'Boda o compromiso', 'Otro'],
  analytics: { metaPixelEnabled: false, metaPixelId: '' },
} as const;

export type SiteConfig = typeof site;
