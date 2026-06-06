import { tech } from '@/components/TechIcons'
import { useI18n } from '@/contexts/I18nContext'
import { MySkills } from './data'
import { BiCoffee } from 'react-icons/bi'
import { SectionTitle } from '@/components/Portfolio/SectionTitle'
import './Skills.scss'

export const Skills = () => {
  const { t, lang } = useI18n()
  
  return (
    <section>
      <SectionTitle title={t('skills')} icon={<BiCoffee />} />
      <div className='skillsContainer'>
        {MySkills.map((item, index) => {
          const Icon = item.icon

          return (
            <div key={index} className='skillsContent'>
              <h4 className='categoryTitle'>
                <Icon className='categoryIcon' />
                {typeof item.title === 'object' ? item.title[lang] || item.title.en : item.title}
              </h4>

              <div className='skillsContentIcons'>
                {item.icons.map((point, index) => (
                  <div key={index} className='skillItem'>
                    <img src={tech[point].icon || '/placeholder.svg'} alt={tech[point].name} />
                    <span>{tech[point].name}</span>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
