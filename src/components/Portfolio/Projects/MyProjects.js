import { tech } from '../../TechIcons'
import SIGEImage from '../../../assets/img/projects/SIGE.svg'
import MarvigImage from '../../../assets/img/projects/Marvig.svg'
import GestiniImage from '../../../assets/img/projects/Gestini.svg'
import VitalcareImage from '../../../assets/img/projects/Vitalcare.svg'
import MySymphonyImage from '../../../assets/img/projects/MySymphony.svg'

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
    name: 'Gestini',
    code: null,
    live: 'https://www.gestini.com/',
    background: GestiniImage,
    description: 'Platform designed to facilitate the management of companies.',
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
    name: 'Vitalcare',
    code: 'https://github.com/Arviixzuhs/Vitalcare',
    live: null,
    background: VitalcareImage,
    description: 'Patient and medical staff management system.',
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
  {
    name: 'SIGE',
    code: null,
    live: null,
    background: SIGEImage,
    description: 'Business management platform and social network.',
    technologies: mernStack,
  },
  {
    name: 'Marvig',
    code: null,
    live: null,
    background: MarvigImage,
    description: 'Apartment rental platform.',
    technologies: mernStack,
  },
  {
    name: 'My Symphony',
    code: 'https://github.com/Arviixzuh/My-Symphony',
    live: 'https://arviixzuh.github.io/My-Symphony/',
    background: MySymphonyImage,
    description: 'Listen to your favorite lo-fi music.',
    technologies: [tech.HTML, tech.CSS, tech.JavaScript],
  },
]

export const MyProjects = [
  {
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
  },
]
