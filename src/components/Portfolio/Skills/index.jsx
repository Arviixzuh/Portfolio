import React from 'react'
import { tech } from '../../TechIcons'
import { BiCoffee } from 'react-icons/bi'
import { SectionTitle } from '../SectionTitle'
import './Skills.scss'

export const Skills = () => {
  const MySkills = Object.keys(tech).map((key) => tech[key])

  return (
    <section>
      <SectionTitle title={'Skills'} icon={<BiCoffee />} />
      <div className='skillsContainer'>
        {MySkills.map((item, index) => (
          <div key={index} className='skillItem'>
            <img src={item.icon} />
          </div>
        ))}
      </div>
    </section>
  )
}
