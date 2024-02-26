import { tech } from '../../TechIcons'
import SIGEImage from '../../../assets/img/projects/SIGE.webp'
import MarvigImage from '../../../assets/img/projects/Marvig.webp'
import MySymphonyImage from '../../../assets/img/projects/MySymphony.webp'

const mernStack = [
  tech.Mongodb,
  tech.ExpressJs,
  tech.React,
  tech.Sass,
  tech.JavaScript,
  tech.Redux,
  tech.SocketIo,
]

export const MyPinnedProjects = [
  {
    name: 'SIGE',
    background: SIGEImage,
    description: 'Business management platform and social network.',
    technologies: mernStack,
  },
  {
    name: 'Marvig',
    description: 'Apartment rental platform.',
    background: MarvigImage,
    technologies: mernStack,
  },
  {
    name: 'My Symphony',
    description: 'Listen to your favorite lo-fi music.',
    background: MySymphonyImage,
    technologies: [tech.HTML, tech.CSS, tech.JavaScript],
  },
]

export const MyProjects = [
  {
    name: 'Gunter',
    description: 'Multifunctional bot for Discord.',
    technologies: [tech.DiscordJs, tech.NodeJs, tech.JavaScript],
  },
  {
    name: 'Easy Translate',
    description: 'Translate text and voice.',
    technologies: [tech.HTML, tech.CSS, tech.JavaScript],
  },
]
