import { useI18n } from '@/contexts/I18nContext'
import { BiBriefcase } from 'react-icons/bi'
import { MyExperience } from './MyExperience'
import { SectionTitle } from '@/components/Portfolio/SectionTitle'
import './Experience.scss'

export const Experience = () => {
  const { t, lang } = useI18n()
  return (
    <section className='experienceSection'>
      <SectionTitle title={t('experience')} icon={<BiBriefcase />} />
      <div className='experienceContainer'>
        {MyExperience.map((item, index) => (
          <div key={index} className='experienceItem'>
            <div className='experienceItemHeader'>
              <div className='companyInfo'>
                <img
                  src={item.companyLogo}
                  alt={`${item.company} logo`}
                  className={`companyLogo ${item.company === 'Freelance' ? 'freelancerLogo' : ''}`}
                />
                <div className='companyText'>
                  <h4>{item.company}</h4>
                  <p className='roleText'>{typeof item.role === 'object' ? (item.role[lang] || item.role.en) : item.role}</p>
                </div>
              </div>
              <span className='dateBadge'>
                {item.date.start} — {item.date.end === 'present' ? t('present') : item.date.end}
              </span>
            </div>
            <ul className='pointsList'>
              {(() => {
                const pts = (item.points && (item.points[lang] || item.points.en)) || []
                return pts.map((point, pIndex) => (
                  <li key={pIndex}>
                    <p>{point}</p>
                  </li>
                ))
              })()}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
