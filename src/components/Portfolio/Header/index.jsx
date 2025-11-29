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
            <span className='bioResumePosition'>Software developer</span>
            <p>🌱💻 Software developer & computer engineering student</p>
          </div>
          <button className='resumeContainer' onClick={() => openResume()}>
            <BiUserPin /> Resume
          </button>
        </div>
      </div>
    </section>
  )
}
