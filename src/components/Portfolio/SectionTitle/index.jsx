import React from 'react'
import './SectionTitle.scss'

export const SectionTitle = ({ title, icon }) => {
  return (
    <div className='sectionTitleContainer'>
      {icon}
      <h2>{title}</h2>
    </div>
  )
}
