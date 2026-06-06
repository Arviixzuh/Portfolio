import { tech } from '@/components/TechIcons'
import SIGEImage from '@/assets/img/projects/SIGE.svg'
import MarvigImage from '@/assets/img/projects/Marvig.svg'
import GestiniImage from '@/assets/img/projects/Gestini.svg'
import VitalcareImage from '@/assets/img/projects/Vitalcare.svg'
import MySymphonyImage from '@/assets/img/projects/MySymphony.svg'
import LitiumShopImage from '@/assets/img/projects/Litium.svg'
import DetailPlumbingImage from '@/assets/img/projects/DetailPlumbing.svg'

// Gestini gallery images
import Gestini1 from '@/assets/img/gallery/Gestini/Gestini_1.png'
import Gestini2 from '@/assets/img/gallery/Gestini/Gestini_2.png'
import Gestini3 from '@/assets/img/gallery/Gestini/Gestini_3.png'
import Gestini4 from '@/assets/img/gallery/Gestini/Gestini_4.png'
import Gestini5 from '@/assets/img/gallery/Gestini/Gestini_5.png'
import Gestini6 from '@/assets/img/gallery/Gestini/Gestini_6.png'
import Gestini7 from '@/assets/img/gallery/Gestini/Gestini_7.png'
import Gestini8 from '@/assets/img/gallery/Gestini/Gestini_8.png'
import Gestini9 from '@/assets/img/gallery/Gestini/Gestini_9.png'
import Gestini10 from '@/assets/img/gallery/Gestini/Gestini_10.png'
import Gestini11 from '@/assets/img/gallery/Gestini/Gestini_11.png'
import Gestini12 from '@/assets/img/gallery/Gestini/Gestini_12.png'
import Gestini13 from '@/assets/img/gallery/Gestini/Gestini_13.png'
import Gestini14 from '@/assets/img/gallery/Gestini/Gestini_14.png'
import Gestini15 from '@/assets/img/gallery/Gestini/Gestini_15.png'

// DetailPlumbing gallery images
import DetailPlumbing1 from '@/assets/img/gallery/DetailPlumbing/DetailPlumbing_1.png'
import DetailPlumbing2 from '@/assets/img/gallery/DetailPlumbing/DetailPlumbing_2.png'
import DetailPlumbing3 from '@/assets/img/gallery/DetailPlumbing/DetailPlumbing_3.png'
import DetailPlumbing4 from '@/assets/img/gallery/DetailPlumbing/DetailPlumbing_4.png'
import DetailPlumbing5 from '@/assets/img/gallery/DetailPlumbing/DetailPlumbing_5.png'
import DetailPlumbing6 from '@/assets/img/gallery/DetailPlumbing/DetailPlumbing_6.png'
import DetailPlumbing7 from '@/assets/img/gallery/DetailPlumbing/DetailPlumbing_7.png'
import DetailPlumbing8 from '@/assets/img/gallery/DetailPlumbing/DetailPlumbing_8.png'
import DetailPlumbing9 from '@/assets/img/gallery/DetailPlumbing/DetailPlumbing_9.png'
import DetailPlumbing10 from '@/assets/img/gallery/DetailPlumbing/DetailPlumbing_10.png'
import DetailPlumbing11 from '@/assets/img/gallery/DetailPlumbing/DetailPlumbing_11.png'
import DetailPlumbing12 from '@/assets/img/gallery/DetailPlumbing/DetailPlumbing_12.png'
import DetailPlumbing13 from '@/assets/img/gallery/DetailPlumbing/DetailPlumbing_13.png'
import DetailPlumbing14 from '@/assets/img/gallery/DetailPlumbing/DetailPlumbing_14.png'
import DetailPlumbing15 from '@/assets/img/gallery/DetailPlumbing/DetailPlumbing_15.png'

// Litium gallery images
import Litium1 from '@/assets/img/gallery/Litium/Litium_1.png'
import Litium2 from '@/assets/img/gallery/Litium/Litium_2.png'
import Litium3 from '@/assets/img/gallery/Litium/Litium_3.png'
import Litium4 from '@/assets/img/gallery/Litium/Litium_4.png'
import Litium5 from '@/assets/img/gallery/Litium/Litium_5.png'
import Litium6 from '@/assets/img/gallery/Litium/Litium_6.png'
import Litium7 from '@/assets/img/gallery/Litium/Litium_7.png'
import Litium8 from '@/assets/img/gallery/Litium/Litium_8.png'
import Litium9 from '@/assets/img/gallery/Litium/Litium_9.png'
import Litium10 from '@/assets/img/gallery/Litium/Litium_10.png'
import Litium11 from '@/assets/img/gallery/Litium/Litium_11.png'
import Litium12 from '@/assets/img/gallery/Litium/Litium_12.png'
import Litium13 from '@/assets/img/gallery/Litium/Litium_13.png'
import Litium14 from '@/assets/img/gallery/Litium/Litium_14.png'
import Litium15 from '@/assets/img/gallery/Litium/Litium_15.png'

// Vitalcare gallery images
import Vitalcare1 from '@/assets/img/gallery/Vitalcare/Vitalcare_1.png'
import Vitalcare2 from '@/assets/img/gallery/Vitalcare/Vitalcare_2.png'
import Vitalcare3 from '@/assets/img/gallery/Vitalcare/Vitalcare_3.png'
import Vitalcare4 from '@/assets/img/gallery/Vitalcare/Vitalcare_4.png'
import Vitalcare5 from '@/assets/img/gallery/Vitalcare/Vitalcare_5.png'
import Vitalcare6 from '@/assets/img/gallery/Vitalcare/Vitalcare_6.png'

const mernStack = [
  tech.Sass,
  tech.Redux,
  tech.React,
  tech.Mongodb,
  tech.SocketIo,
  tech.ExpressJs,
  tech.JavaScript,
]

export const MyPinnedProjects = [
  {
    id: 'gestini',
    name: 'Gestini',
    period: 'Sept 2024 - Presente',
    links: { github: null, live: 'https://www.gestini.com/' },
    background: GestiniImage,
    images: [
      Gestini1,
      Gestini2,
      Gestini3,
      Gestini4,
      Gestini5,
      Gestini6,
      Gestini7,
      Gestini8,
      Gestini9,
      Gestini10,
      Gestini11,
      Gestini12,
      Gestini13,
      Gestini14,
      Gestini15,
    ],
    description: {
      en: 'Desktop and web application for business management providing control over inventory, warehouses, suppliers and customers, with integrated invoicing and multi-branch support.',
      es: 'Aplicación de escritorio y web para la gestión empresarial que ofrece control sobre inventario, almacenes, proveedores y clientes, facturación integrada con ARCA y soporte multi-sucursal.',
    },
    shortDescription: {
      en: 'Desktop and web ERP for inventory, sales and electronic invoices.',
      es: 'ERP de escritorio y web para inventario, ventas y facturación electronica.',
    },
    planning: {
      en: 'Built using Agile methodology. Hybrid architecture (Electron for desktop and web), MySQL and MongoDB databases, backend in Java with Spring. CI/CD via GitHub Actions with separate dev/prod environments.',
      es: 'Construido bajo metodología Ágil. Arquitectura híbrida (Electron para escritorio y web), bases de datos MySQL y MongoDB, backend en Java con Spring. CI/CD con GitHub Actions y entornos separados de desarrollo/producción.',
    },
    details: {
      en: [
        'Real-time inventory and warehouse management with multi-location support.',
        'CRM for suppliers and customers with transaction histories and metrics.',
        'Sales tools and analytics for reports and KPIs.',
        'Fiscal integration for automated electronic invoicing using ARCA.',
        'HR module for employee records and role assignments.',
        'Data import/export to Word, PDF and Excel.',
        'AI agent for data extraction and analysis.',
      ],
      es: [
        'Gestión de inventario y almacenes en tiempo real con soporte multi-ubicación.',
        'CRM de proveedores y clientes con historiales de transacciones y métricas.',
        'Herramientas de ventas y analítica para reportes y KPIs.',
        'Integración fiscal para facturación electrónica automatizada utilizando ARCA.',
        'Módulo de RRHH para registro de empleados Y asignación de roles.',
        'Importación/exportación de datos a Word, PDF y Excel.',
        'Agente de IA para la extracción y análisis de datos.',
      ],
    },
    impact: {
      en: 'Reduced management times, more accurate reporting and high adoption due to simplicity; efficient compliance with fiscal regulations.',
      es: 'Reducción de tiempos de gestión, mayor precisión en reportes y alta adopción por su simplicidad; cumplimiento eficiente de normativas fiscales.',
    },
    technologies: [
      tech.Redux,
      tech.React,
      tech.TypeScript,
      tech.TailwindCSS,
      tech.MySQL,
      tech.Spring,
      tech.Java,
      tech.ElectronJs,
    ],
  },
  {
    id: 'detail-plumbing',
    name: 'Detail Plumbing',
    period: 'Abr 2024 - Feb 2025',
    links: { github: null, live: null },
    background: DetailPlumbingImage,
    images: [
      DetailPlumbing1,
      DetailPlumbing2,
      DetailPlumbing3,
      DetailPlumbing4,
      DetailPlumbing5,
      DetailPlumbing6,
      DetailPlumbing7,
      DetailPlumbing8,
      DetailPlumbing9,
      DetailPlumbing10,
      DetailPlumbing11,
      DetailPlumbing12,
      DetailPlumbing13,
      DetailPlumbing14,
      DetailPlumbing15,
    ],
    description: {
      en: 'ERP platform designed to generate accurate estimates and work directly on PDF blueprints, streamlining budgeting and collaboration workflows.',
      es: 'Plataforma ERP para realizar estimaciones precisas y trabajar sobre planos PDF, optimizando el flujo de presupuestado y colaboración.',
    },
    shortDescription: {
      en: 'Measure directly on PDFs and generate precise construction estimates.',
      es: 'Medir en PDFs y generar presupuestos de obra precisos.',
    },
    planning: {
      en: 'Development guided by interviews with sector professionals to identify budgeting and measurement needs.',
      es: 'Desarrollo guiado por entrevistas a profesionales del sector para identificar necesidades de presupuestado y medición sobre planos.',
    },
    details: {
      en: [
        'PDF viewing and tracing tools to measure distances, areas and elements directly on documents.',
        'Estimation management converting measurements into detailed bills of materials, time and costs.',
        'User and role control with permissions according to function.',
        'Project history and versioning with change logs per user and budget revisions.',
      ],
      es: [
        'Visualización y trazado en PDF para medir distancias, áreas y elementos directamente en los documentos.',
        'Gestión de estimaciones que convierte mediciones en presupuestos detallados de materiales, tiempo y costos.',
        'Control de usuarios y roles con permisos según función.',
        'Historial de proyectos y versiones con registro de cambios por usuario y revisiones de presupuestos.',
      ],
    },
    impact: {
      en: 'Improved accuracy and speed for creating estimates, reduced error margin and clear traceability across project lifecycle.',
      es: 'Mejora en precisión y velocidad para generar presupuestos, menor margen de error y trazabilidad clara en el ciclo de vida del proyecto.',
    },
    technologies: [
      tech.Redux,
      tech.React,
      tech.TypeScript,
      tech.TailwindCSS,
      tech.MySQL,
      tech.Nestjs,
      tech.PrismaORM,
    ],
  },
  {
    id: 'litium',
    name: 'Litium',
    period: 'Jul 2025 - Feb 2026',
    links: { github: 'https://github.com/Arviixzuhs/Litium', live: null },
    background: LitiumShopImage,
    images: [
      Litium1,
      Litium2,
      Litium3,
      Litium4,
      Litium5,
      Litium6,
      Litium7,
      Litium8,
      Litium9,
      Litium10,
      Litium11,
      Litium12,
      Litium13,
      Litium14,
      Litium15,
    ],
    description: {
      en: 'Web e-commerce system for Litium C.A., centralizing inventory management and digitalizing appliance sales.',
      es: 'Sistema web de comercio electrónico para la microempresa Litium C.A., centralizando la gestión de inventario y digitalizando ventas de electrodomésticos.',
    },
    shortDescription: {
      en: 'E‑commerce site to manage catalog, stock and sales.',
      es: 'E‑commerce para gestionar catálogo, stock y ventas.',
    },
    planning: {
      en: 'Requirement analysis with the company; SCRUM methodology to prioritize critical features.',
      es: 'Análisis de requerimientos con la empresa; metodología SCRUM para priorizar funcionalidades críticas.',
    },
    details: {
      en: [
        'Dynamic catalog with detailed specifications and categories.',
        'Shopping cart and reservation system with flexible payment options.',
        'CRM and interaction via direct chat and community comments.',
        'Admin panel for stock control and sales reporting.',
      ],
      es: [
        'Catálogo dinámico con especificaciones técnicas y categorías.',
        'Carrito de compras y reservas con opciones de pago flexibles.',
        'CRM e interacción mediante chat directo y sistema de comentarios.',
        'Panel administrativo para control de stock y reportes de ventas.',
      ],
    },
    impact: {
      en: 'Automated manual processes, extended reach nationally, reduced response times and improved transaction accuracy.',
      es: 'Digitalizó procesos manuales, amplió alcance nacional, redujo tiempos de respuesta y mejoró la precisión transaccional.',
    },
    technologies: [
      tech.Redux,
      tech.React,
      tech.TailwindCSS,
      tech.MySQL,
      tech.Nestjs,
      tech.PrismaORM,
      tech.TypeScript,
      tech.SocketIo,
    ],
  },
  {
    id: 'vitalcare',
    name: 'Vitalcare',
    period: 'Feb 2024 - Sept 2024',
    links: { github: 'https://github.com/Arviixzuhs/Vitalcare', live: null },
    background: VitalcareImage,
    images: [Vitalcare1, Vitalcare2, Vitalcare3, Vitalcare4, Vitalcare5, Vitalcare6],
    description: {
      en: 'Desktop system to optimize medical records, appointments and patient files, centralizing clinical and administrative information.',
      es: 'Sistema de escritorio para optimizar la gestión de historias médicas, citas y expedientes que centraliza información clínica y administrativa.',
    },
    shortDescription: {
      en: 'Desktop system for medical records, appointments and supply control.',
      es: 'Sistema de escritorio para historias clínicas, citas y control de suministros.',
    },
    planning: {
      en: 'Development based on requirements gathered at the University Hospital to prioritize critical functions and reduce bottlenecks.',
      es: 'Desarrollo basado en requerimientos del Hospital Universitario, priorizando funciones críticas para reducir cuellos de botella.',
    },
    details: {
      en: [
        'Medical appointment management with a calendar view.',
        'File viewer for quick access to historical patient documentation.',
        'Advanced search with smart filters for rapid record retrieval.',
        'Admin dashboard featuring real-time operational metrics.',
      ],
      es: [
        'Control de citas médicas con calendario.',
        'Visor de archivos para acceso rápido a documentación histórica del paciente.',
        'Búsqueda avanzada con filtros inteligentes para localizar registros.',
        'Panel administrativo con métricas operacionales en tiempo real.',
      ],
    },
    impact: {
      en: 'Replaced paper processes with digital flows, reducing response times and minimizing errors.',
      es: 'Sustituyó procesos en papel por flujo digital, reduciendo tiempos de respuesta y minimizando errores.',
    },
    technologies: [
      tech.Redux,
      tech.React,
      tech.TailwindCSS,
      tech.MySQL,
      tech.Nestjs,
      tech.Python,
      tech.PrismaORM,
      tech.TypeScript,
      tech.ElectronJs,
    ],
  },
  /*   {
    id: 'sige',
    name: 'SIGE',
    period: 'Sept 2022 - Mar 2024',
    code: null,
    live: null,
    background: SIGEImage,
    images: [SIGEImage],
    description: {
      en: 'Enterprise management platform combining operational tools with social collaboration features for teams.',
      es: 'Plataforma de gestión empresarial que combina gestión de proyectos con herramientas sociales y comunicación en tiempo real para equipos.'
    },
    planning: {
      en: 'Born to centralize team management and unify technical flows with internal communication.',
      es: 'Nació para centralizar la gestión de equipos y unificar flujos técnicos con comunicación interna.'
    },
    details: {
      en: [
        'Comprehensive project management with assignment, monitoring and goal tracking.',
        'Internal community for sharing updates and knowledge.',
        'Real-time chat to speed decision making among team members.',
        'Task control with progress states and deadlines.'
      ],
      es: [
        'Gestión integral de proyectos con asignación, monitoreo y cumplimiento de objetivos.',
        'Comunidad interna para compartir actualizaciones y conocimientos.',
        'Chat en tiempo real para agilizar decisiones entre miembros del equipo.',
        'Control de tareas con estados de progreso y fechas límite.'
      ]
    },
    impact: {
      en: 'Provides a 360 view of operations, strengthens collaborative culture and eliminates information fragmentation.',
      es: 'Ofrece visión 360 de operaciones, fortalece cultura colaborativa y elimina la fragmentación de información.'
    },
    technologies: mernStack,
  }, */
  /* {
    id: 'my-symphony',
    name: 'My Symphony',
    code: 'https://github.com/Arviixzuh/My-Symphony',
    live: 'https://arviixzuh.github.io/My-Symphony/',
    background: MySymphonyImage,
    images: [MySymphonyImage],
    description: 'A lofi stream blending relaxing beats and visuals for deep focus.',
    details: [
      'Reproductor integrado con loop y control de volumen.',
      'Visuales sincronizados con la pista para ambiente relajante.',
    ],
    technologies: [tech.HTML, tech.CSS, tech.JavaScript],
  }, */
  /* {
    id: 'marvig',
    name: 'Marvig',
    period: 'Ene 2020 - Mar 2021',
    code: null,
    live: null,
    background: MarvigImage,
    images: [MarvigImage],
    description:
      'Plataforma de reservas hoteleras que optimiza la interacción entre establecimiento y huéspedes con panel administrativo robusto.',
    planning:
      'Desarrollo enfocado en digitalizar ciclo completo de reservas para evitar duplicaciones y errores de ocupación.',
    details: [
      'Gestión de reservas automatizada con selección de fechas y confirmaciones.',
      'Inventario de habitaciones con categorías, precios y disponibilidad en tiempo real.',
      'Panel administrativo para monitoreo de reservas, cancelaciones y perfiles de huéspedes.',
      'Historial de huéspedes para ofrecer servicio personalizado y mejorar fidelización.',
    ],
    impact:
      'Incrementó eficiencia operativa, redujo carga manual y mejoró tasas de conversión y satisfacción.',
    technologies: [tech.HTML, tech.CSS, tech.JavaScript],
  }, */
]

export const MyProjects = [
  /* {
    name: 'Gunter',
    live: 'https://github.com/Arviixzuh/Gunter',
    description: 'Multifunctional bot for Discord.',
    technologies: [tech.DiscordJs, tech.NodeJs, tech.JavaScript],
  },
  {
    name: 'Easy Translate',
    live: 'https://arviixzuh.github.io/Easy-Translate/',
    description: 'Translate text and voice.',
    technologies: [tech.HTML, tech.CSS, tech.JavaScript],
  }, */
]
