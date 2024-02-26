import React from 'react'
import { tech } from '../../TechIcons'
import './Skills.scss'

export const Skills = () => {
  const MySkills = Object.keys(tech).map((key) => tech[key])

  return (
    <section>
      <h2>Skills</h2>
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
