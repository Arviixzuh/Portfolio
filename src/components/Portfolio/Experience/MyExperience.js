import Detail from '@/assets/img/companies/Detail.png'
import Gestini from '@/assets/img/companies/Gestini.png'
import DreamJunk from '@/assets/img/companies/DreamJunk.png'
import Freelancer from '@/assets/img/companies/Freelancer.svg'

export const MyExperience = [
  {
    company: 'Gestini',
    role: { en: 'Co-Founder', es: 'Co-fundador' },
    date: {
      start: 'Jun 2024',
      end: 'Present',
    },
    companyLogo: Gestini,
    points: {
      en: [
        'Contributed to the design and implementation of the direct tax integration with the ARCA (Argentina) API for issuing electronic invoices.',
        'Led strategic decisions regarding the tech stack, infrastructure, and long-term roadmap aligned with business goals.',
        'Implemented an AI agent for data extraction and analysis, reducing manual work and accelerating decision-making across multiple workflows.'
      ],
      es: [
        'Contribuí al diseño e implementación de la integración tributaria directa con la API ARCA (Argentina) para la emisión de facturas electrónicas.',
        'Dirigí decisiones estratégicas sobre stack tecnológico, infraestructura y roadmap a largo plazo alindado con objetivos del negocio.',
        'Implementé un agente IA para extracción y análisis de datos, reduciendo trabajo manual y acelerando la toma de decisiones en múltiples flujos.'
      ]
    },
  },
  {
    company: 'Detail Plumbing',
    role: { en: 'Fullstack Developer', es: 'Desarrollador Fullstack' },
    date: {
      start: 'Sep 2024',
      end: 'May 2025',
    },
    companyLogo: Detail,
    points: {
      en: [
        'Managed the diagnostic phase through professional interviews, identifying and resolving critical bottlenecks.',
        'Developed precision tools to edit and trace measurements directly on PDF blueprints.',
        'Implemented a project estimation system that accounts for modifications in PDF blueprints, improving the quoting workflow for clients.'
      ],
      es: [
        'Gestioné la fase de diagnóstico mediante entrevistas profesionales, identificando y resolviendo cuellos de botella críticos.',
        'Desarrollé herramientas de precisión para editar y trazar mediciones directamente sobre planos PDF.',
        'Implementé un sistema de estimación de proyectos tomando en cuenta las modificaciones en los planos PDF. Mejorando el flujo de cotización para los clientes.'
      ]
    },
  },
  {
    company: 'Dream Junk Studios',
    role: { en: 'Fullstack Developer', es: 'Desarrollador Fullstack' },
    date: {
      start: 'Sep 2022',
      end: 'May 2024',
    },
    companyLogo: DreamJunk,
    points: {
      en: [
        'Collaborated with UI/UX designers to validate and integrate user interfaces.',
        'Built Discord bots to automate workflows and improve community interaction.',
        'Implemented a management system with integrated social features to centralize communication and collaboration.'
      ],
      es: [
        'Colaboré con diseñadores UI/UX para validar e integrar interfaces de usuario.',
        'Construí bots para Discord para automatizar flujos y mejorar la interacción de la comunidad.',
        'Implementé un sistema de gestión con funciones sociales integradas para centralizar la comunicación y colaboración.'
      ]
    },
  },
  {
    company: 'Freelance',
    role: { en: 'Software Developer', es: 'Desarrollador de Software' },
    date: {
      start: 'Jan 2018',
      end: 'Oct 2022',
    },
    companyLogo: Freelancer,
    points: {
      en: [
        'Developed custom integrations and Discord bots, optimizing workflows for clients.',
        'Implemented RESTful APIs with NestJS for B2B platforms.'
      ],
      es: [
        'Desarrollé integraciones personalizadas y bots para Discord, optimizando flujos para clientes.',
        'Implementé APIs RESTful con NestJS para plataformas B2B.'
      ]
    },
  },
]
