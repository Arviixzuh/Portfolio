import Curriculum from '../../../assets/files/Curriculum.pdf'
import { BiUserPin } from 'react-icons/bi'
import './Header.scss'

export const Header = () => {
  const openResume = () => {
    window.open(Curriculum, '_blank')
  }

  return (
    <section>
      <div className='headerContainer'>
        <div>
          <img src={'https://avatars.githubusercontent.com/u/94721992?v=4'} />
        </div>
        <div className='bioContainer'>
          <div>
            <h1>Arviixzuh</h1>
            <span className={'bioResumePosition'}>Fullstack developer</span>
            <p>
              My name is Victor, I am 19 years old, I live in Venezuela and I am studying systems
              engineering ☁️
            </p>
          </div>
          <button className='resumeContainer' onClick={() => openResume()}>
            <BiUserPin /> Resume
          </button>
        </div>
      </div>
    </section>
  )
}
