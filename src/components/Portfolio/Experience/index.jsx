import React from 'react'
import { BiBriefcase } from 'react-icons/bi'
import { MyExperience } from './MyExperience'
import { SectionTitle } from '../SectionTitle'
import './Experience.scss'

export const Experience = () => {
  return (
    <section>
      <SectionTitle title={'Experience'} icon={<BiBriefcase />} />
      <div className='experienceContainer'>
        {MyExperience.map((item, index) => (
          <div key={index} className='experienceItem'>
            <div>
              <h4>
                {item.role} • {item.company}
              </h4>
              <h5>
                {item.date.start} - {item.date.end}
              </h5>
            </div>
            <ul key={index}>
              {item.points.map((point, index) => (
                <li key={index}>
                  <p>{point}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
