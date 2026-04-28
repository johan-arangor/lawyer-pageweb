// Contenido centralizado para el sitio Enlace Jurídico

export const siteMeta = {
  title: 'Enlace Jurídico — Justicia Transparente, Tecnología a tu Servicio',
  description: 'Firma legal de élite con portal digital 24/7. Derecho de Familia, Civil y Mediación con tecnología de vanguardia.',
  brand: 'Enlace Jurídico',
  tagline: 'Firma Legal de Élite',
  motto: '"Dura es la ley, pero es la ley"',
  copyright: '© 2026 Code Cloud <code/>. Todos los derechos reservados.',
};

export const contact = {
  phone: '+57 301 174 89 09',
  phoneRaw: '+573011748909',
  email: 'servicioalcliente@enlacejuridico.com',
  address: 'Calle 32 # 45-64 Oficina 105 Edificio Thunapa',
  city: 'Medellín - Antioquia',
  hours: 'Lun–Vie: 9:00 AM – 5:00 PM',
  footerAddress: 'Calle 52 # 45-64 of. 105',
};

export const social = {
  linkedin: 'https://linkedin.com/company/enlace-juridico',
  facebook: 'https://facebook.com/enlacejuridico',
  instagram: 'https://instagram.com/enlacejuridico',
  whatsapp: 'https://wa.me/573011748909',
};

export const navigation = [
  { label: 'Inicio', path: '/' },
  { label: 'Áreas de Práctica', path: '/areas' },
  { label: 'Nuestro Equipo', path: '/equipo' },
  { label: 'Sobre Nosotros', path: '/nosotros' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Contacto', path: '/contacto' },
];

export const services = [
  {
    id: 1,
    name: 'Derecho de Familia',
    description: 'Asesoramiento integral en procesos de divorcio, custodia, alimentos y asuntos familiares.',
    icon: 'Heart',
    whenItApplies: 'Cuando existen conflictos en el núcleo familiar que requieren intervención legal para proteger derechos y el bienestar de menores.',
    technicalDetails: 'Divorcios de mutuo acuerdo o contenciosos, fijación de cuota alimentaria, custodia y régimen de visitas, liquidación de sociedad conyugal.',
    features: ['Divorcios y Separaciones', 'Custodia y Alimentos', 'Sociedades Conyugales']
  },
  {
    id: 2,
    name: 'Derecho Civil',
    description: 'Representación en litigio civil, contratos, sucesiones y responsabilidad civil.',
    icon: 'Scale',
    whenItApplies: 'Ante incumplimientos de contratos, disputas de propiedad o la necesidad de organizar legalmente la transferencia de bienes y herencias.',
    technicalDetails: 'Redacción de contratos civiles, procesos de sucesión, responsabilidad civil extracontractual, procesos ejecutivos de cobro.',
    features: ['Sucesiones y Herencias', 'Contratos y Escrituras', 'Responsabilidad Civil']
  },
  {
    id: 3,
    name: 'Mediación',
    description: 'Resolución alternativa de conflictos con eficiencia y confidencialidad.',
    icon: 'Handshake',
    whenItApplies: 'Cuando se busca resolver una disputa sin llegar a los tribunales, ahorrando tiempo, costos y desgaste emocional.',
    technicalDetails: 'Conciliación extrajudicial, mediación familiar, acuerdos societarios, resolución de conflictos vecinales o comunitarios.',
    features: ['Conciliación Extrajudicial', 'Acuerdos de Convivencia', 'Negociación Societaria']
  },
  {
    id: 4,
    name: 'Derecho Laboral',
    description: 'Asesoramiento en relaciones laborales, indemnizaciones y conflictos empresariales.',
    icon: 'Briefcase',
    whenItApplies: 'En casos de despido injustificado, acoso laboral, o cuando se requiere formalizar relaciones de trabajo bajo la ley vigente.',
    technicalDetails: 'Procesos ordinarios laborales, reclamación de prestaciones sociales, defensa en acoso laboral, asesoría en pensiones.',
    features: ['Despidos Injustificados', 'Prestaciones Sociales', 'Asesoría Pensional']
  },
  {
    id: 5,
    name: 'Derecho Comercial',
    description: 'Contratos mercantiles, constitución de empresas y asesoramiento corporativo.',
    icon: 'TrendingUp',
    whenItApplies: 'Para emprendedores y empresas que necesitan blindaje legal en sus operaciones, contratos y estructura corporativa.',
    technicalDetails: 'Constitución de sociedades (SAS), revisión de contratos mercantiles, propiedad industrial, procesos de insolvencia empresarial.',
    features: ['Constitución de Empresas', 'Derecho Societario', 'Contratos Mercantiles']
  },
  {
    id: 6,
    name: 'Propiedad Intelectual',
    description: 'Protección de marcas, patentes y derechos de autor.',
    icon: 'Shield',
    whenItApplies: 'Cuando ha creado un activo intangible (nombre, logo, invento, obra) y desea evitar que terceros se lucren de su esfuerzo sin permiso.',
    technicalDetails: 'Registro de marca ante la SIC, patentes de invención, protección de derechos de autor, litigios por infracción de marca.',
    features: ['Registro de Marcas', 'Derechos de Autor', 'Patentes y Diseños']
  },
  {
    id: 7,
    name: 'Derecho Administrativo',
    description: 'Recursos contencioso-administrativos y procedimientos ante entidades públicas.',
    icon: 'Building2',
    whenItApplies: 'Si tiene un conflicto directo con el Estado, entidades gubernamentales o ha recibido sanciones administrativas injustas.',
    technicalDetails: 'Nulidad y restablecimiento del derecho, reparación directa, defensa en procesos disciplinarios, recursos de reposición.',
    features: ['Recursos de Nulidad', 'Demandas al Estado', 'Procesos Disciplinarios']
  },
  {
    id: 8,
    name: 'Derecho Penal',
    description: 'Defensa integral en procesos penales y asesoramiento en materia criminal.',
    icon: 'Gavel',
    whenItApplies: 'Ante una investigación penal, acusación criminal o la necesidad de interponer denuncias por delitos cometidos en su contra.',
    technicalDetails: 'Defensa técnica en juicio, representación de víctimas, denuncias penales, asesoría en delitos económicos y corporativos.',
    features: ['Defensa Técnica', 'Denuncias Penales', 'Representación de Víctimas']
  },
];

export const stats = [
  { number: '100+', label: 'Clientes satisfechos', description: 'familias y empresas confiaron en nosotros' },
  { number: '98%', label: 'Tasa de éxito', description: 'de casos resueltos favorablemente en los últimos años.' },
  { number: '5+', label: 'Años de experiencia', description: 'en el mercado de servicios legales' },
  { number: '8', label: 'Áreas de especialización', description: 'en las que ofrecemos nuestros servicios' },
];

export const testimonials = [
  {
    id: 1,
    name: 'Juan Martínez',
    role: 'Caso de Familia',
    avatar: 'JM',
    quote: 'Enlace Jurídico fue fundamental en la resolución de mi caso. El equipo fue profesional, empático y me guió en cada paso del proceso. Hoy puedo decir que tomé la mejor decisión al elegirlos.',
  },
  {
    id: 2,
    name: 'Carlos Rodríguez',
    role: 'Caso Comercial',
    avatar: 'CR',
    quote: 'Excelente asesoramiento en mi caso comercial. El abogado comprendió perfectamente mis necesidades y logró una solución que me pareció óptima. Muy recomendados.',
  },
  {
    id: 3,
    name: 'Sandra García',
    role: 'Mediación',
    avatar: 'SG',
    quote: 'A través de la mediación con Enlace Jurídico, logramos resolver un conflicto que parecía irreconciliable. El proceso fue ágil y ambas partes quedamos satisfechas.',
  },
];

export const teamExtended = [
  {
    id: 1,
    name: 'Steven Vasquez',
    role: 'Abogado Conciliador | Especialista en Responsabilidad Civil y Propiedad Horizontal',
    image: '/img/Stiven_Vasquez.jpg',
    bio: 'Combino experiencia en litigios y conciliación con un enfoque estratégico en la gestión de riesgos para el sector inmobiliario y empresarial. Mi dominio en normativa de propiedad horizontal, seguridad jurídica y responsabilidad civil me permite guiarte para tomar decisiones con certeza y reducir la exposición legal de tu patrimonio o empresa.',
    specialization: 'Responsabilidad Civil y Propiedad Horizontal',
    hook: '¿Buscas respaldo jurídico que prevenga conflictos antes de que escalen?',
    areas: [
      'Conciliación en derecho y resolución alternativa de conflictos',
      'Responsabilidad civil y prevención de riesgos jurídicos',
      'Propiedad horizontal y regulación inmobiliaria',
      'Representación judicial y acompañamiento estratégico'
    ],
    approach: 'Transformo análisis complejos en soluciones claras, priorizando la negociación efectiva y la conciliación extrajudicial. Mi método proactivo me posiciona como un aliado jurídico clave para administradores de conjuntos, empresas constructoras y comunidades residenciales que buscan evitar litigios costosos y garantizar tranquilidad operativa.',
  },
  {
    id: 2,
    name: 'Sandra Henao Lugo',
    role: 'Especialista en Derecho Comercial y Conciliación | Asesoría Corporativa Integral',
    image: '/img/Sandra_Henao.jpg',
    bio: 'Combino experiencia en derecho comercial, litigio civil y de familia, con un enfoque estratégico en la conciliación y la reestructuración financiera. Mi objetivo es transformar situaciones complejas en acuerdos claros que protejan tus intereses y te devuelvan la tranquilidad operativa y personal.',
    specialization: 'Derecho Comercial y Conciliación',
    hook: '¿Tu empresa o patrimonio enfrenta un conflicto que requiere una salida rápida, segura y legalmente blindada?',
    areas: [
      'Derecho comercial y asesoría corporativa integral',
      'Conciliación extrajudicial y resolución de conflictos',
      'Litigio en procesos civiles y de familia',
      'Insolvencia para personas naturales y comerciantes'
    ],
    approach: 'Mi trayectoria en estrados judiciales me permite anticipar riesgos y diseñar estrategias de defensa sólidas. Priorizo la conciliación como vía ágil y costo-eficiente, pero cuento con la capacidad de litigio necesaria cuando la negociación no es suficiente. Esto me posiciona como tu abogada integral y confiable, acompañándote desde la prevención hasta la resolución definitiva.',
  },
  {
    id: 3,
    name: 'Albert Vieri',
    role: 'Abogado Conciliador | Especialista en Responsabilidad Civil y del Estado',
    image: '/img/Albert_Vieri_3.jpg',
    bio: 'Combino más de una década de trayectoria en el sector privado con especialización en responsabilidad civil, del estado y derecho de seguros. Mi enfoque analítico y estratégico me permite anticipar contingencias, blindar activos y resolver conflictos con eficiencia, tanto en escenarios extrajudiciales como en litigio.',
    specialization: 'Responsabilidad Civil y del Estado',
    hook: '¿Tu empresa o patrimonio enfrenta un riesgo jurídico complejo?',
    areas: [
      'Responsabilidad civil y del estado',
      'Derecho inmobiliario y financiero',
      'Asesoría en seguros y gestión de riesgos',
      'Conciliación y acompañamiento judicial'
    ],
    approach: 'Soy un profesional dinámico y resolutivo, con capacidad probada para traducir marcos legales complejos en soluciones prácticas que protegen tus intereses. Me posiciono como tu aliado estratégico para empresas, aseguradoras y clientes que requieren certeza jurídica en decisiones críticas.',
  }
];

export const team = teamExtended;

export const whyUs = [
  {
    title: 'Defensa Especializada',
    description: 'Protección legal en todas sus ramas',
  },
  {
    title: 'Experiencia de años',
    description: 'Trayectoria probada en litigio exitoso',
  },
];

export const benefits = [
  {
    title: 'Experiencia y credibilidad',
    description: 'Más de 15 años representando clientes en casos complejos. Nuestra trayectoria habla de resultados reales y satisfacción comprobada.',
  },
  {
    title: 'Atención personalizada',
    description: 'Cada cliente recibe un abogado dedicado que comprende su situación y le acompaña en cada paso del proceso.',
  },
  {
    title: 'Diversificación de servicios',
    description: 'Cobertura integral en múltiples áreas del derecho, lo que permite soluciones integrales para su familia o empresa.',
  },
  {
    title: 'Tarifas flexibles',
    description: 'Oferecemos opciones de pago adaptadas a sus posibilidades, sin comprometer la calidad de nuestra asesoría jurídica.',
  },
];

export const workflow = [
  {
    step: '01',
    icon: 'Search',
    title: 'Diagnóstico',
    desc: 'Análisis exhaustivo de su situación jurídica. Identificamos fortalezas y riesgos.',
  },
  {
    step: '02',
    icon: 'Target',
    title: 'Estrategia',
    desc: 'Diseñamos un plan jurídico personalizado con objetivos claros y plazos definidos.',
  },
  {
    step: '03',
    icon: 'Zap',
    title: 'Ejecución',
    desc: 'Actuamos con precisión quirúrgica. Cada escrito y audiencia es ejecutada por expertos.',
  },
  {
    step: '04',
    icon: 'Check',
    title: 'Resultado',
    desc: 'Entregamos resoluciones favorables documentadas e informe final completo.',
  },
];

export const faqs = [
  {
    id: 1,
    question: '¿Cuál es el costo de una consulta inicial?',
    answer: 'La primera consulta es completamente gratuita. En ella conoceremos tu caso y podremos darte una orientación inicial sin ningún compromiso.',
  },
  {
    id: 2,
    question: '¿Cuánto tiempo tarda un caso típico?',
    answer: 'La duración depende de la complejidad del caso. Casos simples pueden resolverse en semanas, mientras que litigios complejos pueden tomar varios meses o años.',
  },
  {
    id: 3,
    question: '¿Ofrecen servicios de mediación?',
    answer: 'Sí, contamos con especialistas en mediación y resolución alternativa de conflictos, lo que a menudo es más rápido y económico que el litigio tradicional.',
  },
  {
    id: 4,
    question: '¿Tienen experiencia en casos internacionales?',
    answer: 'Nuestro equipo tiene experiencia con asuntos que involucran legislación internacional, especialmente en derecho de familia y comercial.',
  },
  {
    id: 5,
    question: '¿Puedo acceder a mi caso en línea?',
    answer: 'Sí, ofrecemos un portal privado 24/7 donde puedes consultar el estado de tu caso, compartir documentos y comunicarte con tu abogado.',
  },
  {
    id: 6,
    question: '¿Qué áreas de práctica cubre la firma?',
    answer: 'Cubrimos 8 áreas principales: Familia, Civil, Mediación, Laboral, Comercial, Propiedad Intelectual, Administrativo y Penal.',
  },
  {
    id: 7,
    question: '¿Cómo inicio un caso con ustedes?',
    answer: 'Puedes agendar una consulta gratuita a través de nuestro sitio, llamarnos directamente o escribirnos por email. Nuestro equipo estará disponible para atenderte.',
  },
  {
    id: 8,
    question: '¿Ofrecen asesoramiento por videoconferencia?',
    answer: 'Sí, entendemos la importancia de la flexibilidad. Ofrecemos consultas presenciales y virtuales según tu preferencia y disponibilidad.',
  },
];

export const heroContent = {
  mainPrincipalText: '¡su bienestar es nuestra prioridad!',
  mainTitle: 'En ENLACE JURÍDICO, encontrará asesoría especializada y un equipo comprometido con su éxito',
  highlightText: 'Trabajamos juntos hacia soluciones legales efectivas.',
  subtitle: 'Conozca nuestras áreas de práctica y cómo podemos ayudarle',
  ctaText: 'Agendar Cita',
  portalText: 'Área Privada',
};

export const rightPlaceContent = {
  label: 'Experiencia comprobada',
  title: 'HAS LLEGADO AL LUGAR INDICADO',
  description: 'En Enlace Jurídico comprendemos que cada caso es único y requiere atención personalizada. Nuestro equipo de abogados especializados trabaja con dedicación para proteger sus intereses y lograr los mejores resultados posibles.',
};

export const contactCtaContent = {
  title: 'Estamos aquí para asistirle',
  subtitle: 'Llámenos ahora',
};

export const appTrackingContent = {
  title: 'App de Seguimiento de Casos',
  subtitle: 'Control total de tu proceso legal 24/7',
  description: 'Accede a tu portal privado en cualquier momento y lugar. Consulta el estado de tu caso, recibe actualizaciones en tiempo real y comunícate directamente con tu abogado.',
  features: [
    'Acceso 24/7 a tu caso',
    'Notificaciones en tiempo real',
    'Documentos en línea',
    'Chat con tu abogado',
  ],
};

export const corporateValues = [
  {
    id: 1,
    title: 'Honestidad',
    description: 'Actuación bajo principios de verdad, honradez y respeto hacia los demás.',
    icon: 'Shield',
    color: 'accent'
  },
  {
    id: 2,
    title: 'Diligencia',
    description: 'Capacidad de actuar con cuidado, profesionalismo, ética y dinamismo.',
    icon: 'CheckCircle2',
    color: 'primary'
  },
  {
    id: 3,
    title: 'Integridad',
    description: 'Suma de buenas prácticas que rige la actuación global relacionada con los valores y principios corporativos.',
    icon: 'Star',
    color: 'accent'
  },
  {
    id: 4,
    title: 'Trabajo en equipo',
    description: 'Integrar esfuerzos para lograr un resultado común.',
    icon: 'Users',
    color: 'primary'
  },
  {
    id: 5,
    title: 'Lealtad',
    description: 'Compromiso de respeto y fidelidad hacia los demás.',
    icon: 'Heart',
    color: 'accent'
  }
]