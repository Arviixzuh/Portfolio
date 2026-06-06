import React from 'react'
import { BiAt } from 'react-icons/bi'
import { useI18n } from '@/contexts/I18nContext'
import { MySocials } from './MySocials'
import { SectionTitle } from '@/components/Portfolio/SectionTitle'
import './Socials.scss'

export const Socials = () => {
  const { t } = useI18n()
  return (
    <section>
      <SectionTitle title={t('socials')} icon={<BiAt />} />
      <div className='socialsContainer'>
        {MySocials.map((item, index) => (
          <a href={item.link} target='_blank' key={index}>
            <img src={item.icon} className={`socialIcon ${item.name.toLowerCase()}`} alt={item.name} />
            <h4 style={{ color: item.color }}>{item.name}</h4>
          </a>
        ))}
      </div>
    </section>
  )
}
