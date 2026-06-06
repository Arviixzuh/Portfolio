import React from 'react'
import { Link } from 'react-router-dom'
import { BiLink } from 'react-icons/bi'
import { useI18n } from '@/contexts/I18nContext'
import { FaGithub } from 'react-icons/fa'
import { BiCodeAlt } from 'react-icons/bi'
import { SectionTitle } from '@/components/Portfolio/SectionTitle'
import { MyProjects, MyPinnedProjects } from './MyProjects'
import './Projects.scss'

export const Projects = () => {
  const { t, lang } = useI18n()
  const getShort = (item) => {
    return (
      (item.shortDescription && (item.shortDescription[lang] || item.shortDescription.en)) ||
      (item.description && (item.description[lang] || item.description.en)) ||
      item.description ||
      ''
    )
  }

  return (
    <section>
      <SectionTitle title={t('projects')} icon={<BiCodeAlt />} />
      <div className='projectsContainer'>
        <div className='projectsContainer2'>
          {MyPinnedProjects.map((item, index) => (
            <Link
              to={`/project/${item.id || item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
              key={index}
              className='pinnedProjectCardContainer'
            >
              <img src={item.background} className='projectBackgroundImg' />
              <div className='pinnedProjectItem'>
                <div>
                  <h4>{item.name}</h4>
                  <p>{getShort(item)}</p>
                </div>
                <div className='pinnedProjectsTechnologiesContainer'>
                  {item.technologies.map((itemTwo) => (
                    <img src={itemTwo.icon} key={itemTwo.name} />
                  ))}
                </div>
                <div className='pinnedProjectExternalLinks' onClick={(e) => e.stopPropagation()}>
                  {item.links.live && (
                    <a
                      className='projectLinkButton'
                      href={item.links.live}
                      target='_blank'
                      rel='noreferrer'
                    >
                      {t('live')}
                      <BiLink />
                    </a>
                  )}
                  {item.links.github && (
                    <a
                      className='projectLinkButton'
                      href={item.links.github}
                      target='_blank'
                      rel='noreferrer'
                    >
                      {t('code')}
                      <FaGithub />
                    </a>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
        {MyProjects.length > 0 && (
          <div className='projectsContentContainer'>
            {MyProjects.map((item, index) => (
              <Link
                to={`/project/${item.id || item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                key={index}
                className='projectCardContainer'
              >
                {item.images && item.images[0] && (
                  <img src={item.images[0]} alt='' className='projectThumbnail' />
                )}
                <div className='projectExternalLink'>
                  <h4>{item.name}</h4>
                  <BiLink />
                </div>
                <p>{getShort(item)}</p>
                <div className='technologiesContainer'>
                  {item.technologies.map((itemTwo) => (
                    <img src={itemTwo.icon} alt={itemTwo.name} key={itemTwo.name} />
                  ))}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
