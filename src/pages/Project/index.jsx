import React from 'react'
import { tech } from '@/components/TechIcons'
import { Navbar } from '@/components/Navbar'
import { useI18n } from '@/contexts/I18nContext'
import { MdArrowBack } from 'react-icons/md'
import { useParams, Link, Navigate } from 'react-router-dom'
import { MyPinnedProjects, MyProjects } from '@/components/Portfolio/Projects/MyProjects'
import { BiLink, BiChevronLeft, BiChevronRight, BiX } from 'react-icons/bi'
import { FaRegFileAlt, FaTags, FaTools, FaImages, FaListAlt, FaGithub } from 'react-icons/fa'
import './ProjectPage.scss'

const slugify = (s) =>
  s &&
  s
    .toString()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

const ProjectPage = () => {
  const { t, lang } = useI18n()
  const { id } = useParams()
  const all = [...MyPinnedProjects, ...MyProjects]
  const project = all.find((p) => p.id === id || slugify(p.name) === id)
  const [lightboxOpen, setLightboxOpen] = React.useState(false)
  const [lightboxIndex, setLightboxIndex] = React.useState(0)

  const openLightbox = (i) => {
    setLightboxIndex(i)
    setLightboxOpen(true)
  }
  const closeLightbox = () => setLightboxOpen(false)

  React.useEffect(() => {
    if (!lightboxOpen) return
    const onKey = (e) => {
      if (e.key === 'Escape') return closeLightbox()
      if (e.key === 'ArrowRight') return setLightboxIndex((i) => (i + 1) % images.length)
      if (e.key === 'ArrowLeft')
        return setLightboxIndex((i) => (i - 1 + images.length) % images.length)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightboxOpen])

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [id])

  if (!project) {
    return <Navigate to='/' />
  }

  const images =
    project.images && project.images.length
      ? project.images
      : project.background
        ? [project.background]
        : []
  const others = all.filter((p) => p.id !== project.id)

  const getShort = (p) =>
    (p.shortDescription && (p.shortDescription[lang] || p.shortDescription.en)) ||
    (p.description && (p.description[lang] || p.description.en)) ||
    p.description ||
    ''

  const prevLightbox = (e) => {
    e && e.stopPropagation()
    setLightboxIndex((i) => (i - 1 + images.length) % images.length)
  }

  const nextLightbox = (e) => {
    e && e.stopPropagation()
    setLightboxIndex((i) => (i + 1) % images.length)
  }

  return (
    <main>
      <Navbar />
      <div className='portfolioContainer'>
        <div className='projectPage column'>
          <div className='projectMainImageContainer'>
            <img className='mainImage' src={project.background} alt={`${project.name}-main`} />
          </div>
          <hr className='line' />
          <div>
            <h1>{project.name}</h1>
            {(project.links.live || project.links.github) && (
              <div className='projectLinks'>
                {project.links.live && (
                  <a
                    className='projectLinkButton'
                    href={project.links.live}
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label={t('live')}
                    title={t('live')}
                  >
                    {t('live')}
                    <BiLink />
                  </a>
                )}
                {project.links.github && (
                  <a
                    className='projectLinkButton'
                    href={project.links.github}
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label={t('code')}
                    title={t('code')}
                  >
                    {t('code')}
                    <FaGithub />
                  </a>
                )}
              </div>
            )}
          </div>
          <div className='descriptionRow'>
            <div className='projectDescription'>
              <h3 className='sectionSubtitle'>
                <FaRegFileAlt /> {t('description')}
              </h3>
              <p>{project.description && (project.description[lang] || project.description.en)}</p>
            </div>
          </div>
          <div className='projectTech'>
            <h3 className='sectionSubtitle'>
              <FaTags /> {t('technologies')}
            </h3>
            <div className='skillsContentIcons'>
              {project.technologies &&
                project.technologies.map((techItem, index) => (
                  <div key={index} className='skillItem'>
                    <img src={techItem.icon || '/placeholder.svg'} />
                    <span>{techItem.name}</span>
                  </div>
                ))}
            </div>
          </div>
          <div className='technicalDetails'>
            <h3 className='sectionSubtitle'>
              <FaTools /> {t('technical_details')}
            </h3>
            {project.details && (
              <ul>
                {(project.details[lang] || project.details.en).map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            )}
          </div>
          <hr className='line' />
          <div className='projectGalleryGrid'>
            <h3 className='sectionSubtitle'>
              <FaImages /> {t('gallery')}
            </h3>
            <div className='galleryGrid'>
              {images.map((img, i) => (
                <img key={i} src={img} alt={`gallery-${i}`} onClick={() => openLightbox(i)} />
              ))}
            </div>
            {lightboxOpen && (
              <div className='lightboxOverlay' onClick={closeLightbox}>
                <button className='lightboxClose' onClick={closeLightbox} aria-label='Cerrar'>
                  <BiX />
                </button>
                <div className='lightboxContent' onClick={(e) => e.stopPropagation()}>
                  <button className='lightboxNav left' onClick={prevLightbox} aria-label='Anterior'>
                    <BiChevronLeft />
                  </button>
                  <img
                    src={images[lightboxIndex]}
                    className='lightboxImg'
                    alt={`lightbox-${lightboxIndex}`}
                  />
                  <button
                    className='lightboxNav right'
                    onClick={nextLightbox}
                    aria-label='Siguiente'
                  >
                    <BiChevronRight />
                  </button>
                </div>
              </div>
            )}
          </div>
          <hr className='line' />
          {others.length > 0 && (
            <div className='otherProjects'>
              <h3 className='sectionSubtitle'>
                <FaListAlt /> {t('other_projects')}
              </h3>
              <div className='projectsContentContainer'>
                {others.map((p) => (
                  <Link key={p.id} to={`/project/${p.id}`} className='projectCardContainer'>
                    <img src={p.background} className='otherProjectImg' alt={p.name} />
                    <div className='projectCardBody'>
                      <div className='projectExternalLink'>
                        <h4 style={{ color: 'var(--titles)', margin: 0 }}>{p.name}</h4>
                        <BiLink />
                      </div>
                      <p style={{ color: 'var(--texts)', marginTop: 8 }}>
                        {(p.shortDescription &&
                          (p.shortDescription[lang] || p.shortDescription.en)) ||
                          (p.description && (p.description[lang] || p.description.en))}
                      </p>

                      <div className='technologiesContainer' style={{ marginTop: 8 }}>
                        {p.technologies &&
                          p.technologies.map((techItem) => (
                            <div
                              className='techIcon'
                              key={techItem.name}
                              data-tooltip={techItem.name}
                              tabIndex={0}
                            >
                              <img src={techItem.icon} alt={techItem.name} />
                            </div>
                          ))}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}

export default ProjectPage
