import { useI18n } from '@/contexts/I18nContext'
import Curriculum from '@/assets/files/VictorPandolfiCV.pdf'
import { BiUserPin } from 'react-icons/bi'
import './Header.scss'

export const Header = () => {
  const { t } = useI18n()
  return (
    <section>
      <div className='headerContainer'>
        <div>
          <img
            src='https://avatars.githubusercontent.com/u/94721992?v=4'
            alt='Victor Pandolfi Profile'
          />
        </div>
        <div className='bioContainer'>
          <div>
            <h1>{t('name')}</h1>
            <p>
              <span className='bioResumePosition'>{t('position')}</span> {t('profile_bio')}
            </p>
          </div>
          <a href={Curriculum} target='_blank' rel='noreferrer' className='resumeContainer'>
            <BiUserPin /> {t('resume')}
          </a>
        </div>
      </div>
    </section>
  )
}
