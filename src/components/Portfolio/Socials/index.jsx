import React from 'react'
import { MySocials } from './MySocials'
import './Socials.scss'

export const Socials = () => {
  return (
    <section>
      <h2>Socials</h2>
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
