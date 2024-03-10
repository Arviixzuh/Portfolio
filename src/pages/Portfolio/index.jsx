import { Email } from '../../components/Portfolio/Email'
import { Header } from '../../components/Portfolio/Header'
import { Skills } from '../../components/Portfolio/Skills'
import { Navbar } from '../../components/Navbar'
import { Socials } from '../../components/Portfolio/Socials'
import { Projects } from '../../components/Portfolio/Projects'
import { Experience } from '../../components/Portfolio/Experience'

export const Portfolio = () => {
  return (
    <main>
      <Navbar />
      <div className='portfolioContainer'>
        <Header />
        <span className='line' />
        <Experience />
        <Projects />
        <Skills />
        <Socials />
        <Email />
      </div>
    </main>
  )
}
