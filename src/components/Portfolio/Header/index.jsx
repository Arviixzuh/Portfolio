import Curriculum from '../../../assets/files/VictorPandolfiCV.pdf'
import { BiUserPin } from 'react-icons/bi'
import './Header.scss'

export const Header = () => {
  return (
    <section>
      <div className='headerContainer'>
        <div>
          <img
            src='https://avatars.githubusercontent.com/u/94721992?v=4'
            alt='Victor Pandolfi Profile'
          />
        </div>
        <div className='bioContainer'>
          <div>
            <h1>Arviixzuh</h1>
            <span className='bioResumePosition'>Software Engineer</span>
            <p>
              🌱💻 Software Engineer with +7 years of experience, focused on building maintainable
              and efficient applications using NestJS and Spring Boot.
            </p>
          </div>
          <a href={Curriculum} target='_blank' rel='noreferrer' className='resumeContainer'>
            <BiUserPin /> Resume
          </a>
        </div>
      </div>
    </section>
  )
}
