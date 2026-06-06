import React from 'react'
import { useI18n } from '@/contexts/I18nContext'
import { SectionTitle } from '@/components/Portfolio/SectionTitle'
import { IoMailOutline } from 'react-icons/io5'
import { BiMailSend, BiCopy } from 'react-icons/bi'
import './Email.scss'

export const Email = () => {
  const { t } = useI18n()
  const [emailCopied, setEmailCopied] = React.useState(false)
  const emailAddress = 'arviixzuh@gmail.com'

  const handleCopy = () => {
    navigator.clipboard.writeText(emailAddress).then(() => {
      setEmailCopied(true)
      setTimeout(() => {
        setEmailCopied(false)
      }, 2000)
    })
  }

  return (
    <section>
      <SectionTitle title={t('email')} icon={<IoMailOutline />} />
      <div className='emailContainer'>
        <p>{emailAddress}</p>
        <div className='emailIconsContainer'>
          <a href={`mailto:${emailAddress}`} target='_blank' rel='noopener noreferrer'>
            <BiMailSend />
          </a>
          {emailCopied && <span className='emailCopied'>{t('copied')}</span>}
          <BiCopy onClick={() => handleCopy()} />
        </div>
      </div>
    </section>
  )
}
