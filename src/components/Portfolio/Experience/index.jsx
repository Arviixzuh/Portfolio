import React from 'react'
import { MyExperience } from './MyExperience'
import './Experience.scss'

export const Experience = () => {
  return (
    <section>
      <h2>Experience</h2>
      <div className='experienceContainer'>
        {MyExperience.map((item, index) => (
          <div key={index}>
            <h4>
              {item.role} • {item.company}
            </h4>
            <h5>
              {item.date.start} - {item.date.end}
            </h5>
          </div>
        ))}
      </div>
    </section>
  )
}
