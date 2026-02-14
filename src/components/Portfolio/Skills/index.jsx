import { SectionTitle } from '../SectionTitle'
import { MySkills } from './data'
import { tech } from '../../TechIcons'
import { BiCoffee } from 'react-icons/bi'
import './Skills.scss'

export const Skills = () => {
  return (
    <section>
      <SectionTitle title={'Skills'} icon={<BiCoffee />} />
      <div className='skillsContainer'>
        {MySkills.map((item, index) => {
          const Icon = item.icon

          return (
            <div key={index} className='skillsContent'>
              <h4 className='categoryTitle'>
                <Icon className='categoryIcon' />
                {item.title}
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
