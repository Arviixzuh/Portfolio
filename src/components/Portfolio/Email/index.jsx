import React from 'react'
import { SectionTitle } from '../SectionTitle'
import { IoMailOutline } from 'react-icons/io5'
import { BiMailSend, BiCopy } from 'react-icons/bi'
import './Email.scss'

export const Email = () => {
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
      <SectionTitle title={'Email'} icon={<IoMailOutline />} />
      <div className='emailContainer'>
        <p>{emailAddress}</p>
        <div className='emailIconsContainer'>
          <a href={`mailto:${emailAddress}`} target='_blank' rel='noopener noreferrer'>
            <BiMailSend />
          </a>
          {emailCopied && <span className='emailCopied'>Copied</span>}
          <BiCopy onClick={() => handleCopy()} />
        </div>
      </div>
    </section>
  )
}
