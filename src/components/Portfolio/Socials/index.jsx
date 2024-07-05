import React from 'react'
import { BiAt } from 'react-icons/bi'
import { SectionTitle } from '../SectionTitle'
import { MySocials } from './MySocials'
import './Socials.scss'

export const Socials = () => {
  return (
    <section>
      <SectionTitle title={'Socials'} icon={<BiAt />} />
      <div className='socialsContainer'>
        {MySocials.map((item, index) => (
          <a href={item.link} target='_blank' key={index}>
            <img src={item.icon} />
            <h4 style={{ color: item.color }}>{item.name}</h4>
          </a>
        ))}
      </div>
    </section>
  )
}
