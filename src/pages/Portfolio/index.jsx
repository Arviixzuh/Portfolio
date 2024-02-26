import { Email } from '../../components/Portfolio/Email'
import { Header } from '../../components/Portfolio/Header'
import { Skills } from '../../components/Portfolio/Skills'
import { Socials } from '../../components/Portfolio/Socials'
import { Projects } from '../../components/Portfolio/Projects'
import { Experience } from '../../components/Portfolio/Experience'

export const Portfolio = () => {
  return (
    <main>
      <Header />
      <span className='line' />
      <Experience />
      <Projects />
      <Skills />
      <Socials />
      <Email />
    </main>
  )
}
