import React from 'react'
import Arvii from '../../../assets/img/Arvii.jpg'
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
        <img src={Arvii} />
        <div className='bioContainer'>
          <div>
            <h1>Arviixzuh</h1>
            <span className={'bioResumePosition'}>Fullstack developer</span>
            <p>
              My name is Victor, I am 18 years old, I live in Venezuela and I am studying systems
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
