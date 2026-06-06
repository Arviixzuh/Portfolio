import { BiCodeAlt, BiServer, BiLayout, BiData, BiCloud, BiRocket } from 'react-icons/bi'

export const MySkills = [
  {
    title: { en: 'Programming Languages', es: 'Lenguajes de programación' },
    icon: BiCodeAlt,
    icons: ['JavaScript', 'TypeScript', 'Java', 'Python', 'C'],
  },
  {
    title: { en: 'Backend Development', es: 'Desarrollo Backend' },
    icon: BiServer,
    icons: ['NodeJs', 'ExpressJs', 'Nestjs', 'Spring', 'PrismaORM', 'SocketIo', 'GraphQL'],
  },
  {
    title: { en: 'Frontend Development', es: 'Desarrollo Frontend' },
    icon: BiLayout,
    icons: ['React', 'Redux', 'HTML', 'CSS', 'Sass', 'TailwindCSS'],
  },
  {
    title: { en: 'Databases', es: 'Bases de datos' },
    icon: BiData,
    icons: ['MySQL', 'PostgreSQL', 'SQLite', 'Mongodb'],
  },
  {
    title: { en: 'Infrastructure & DevOps', es: 'Infraestructura y DevOps' },
    icon: BiCloud,
    icons: ['Docker', 'Nginx', 'AWS', 'GCP', 'GithubActions', 'Cloudflare', 'Ubuntu', 'Git'],
  },
  {
    title: { en: 'Specialized Development', es: 'Desarrollo especializado' },
    icon: BiRocket,
    icons: ['ElectronJs', 'DiscordJs'],
  },
]
