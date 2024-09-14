import React from 'react'
import { BiLink } from 'react-icons/bi'
import { BiCodeAlt } from 'react-icons/bi'
import { SectionTitle } from '../SectionTitle'
import { MyProjects, MyPinnedProjects } from './MyProjects'
import './Projects.scss'

export const Projects = () => {
  return (
    <section>
      <SectionTitle title={'Projects'} icon={<BiCodeAlt />} />
      <div className='projectsContainer'>
        <div className='projectsContainer2'>
          {MyPinnedProjects.map((item, index) => (
            <div key={index} className='pinnedProjectCardContainer'>
              <img src={item.background} className='projectBackgroundImg' />
              <div className='pinnedProjectItem'>
                <div>
                  <h4>{item.name}</h4>
                  <p>{item.description}</p>
                </div>
                <div className='pinnedProjectsTechnologiesContainer'>
                  {item.technologies.map((itemTwo) => (
                    <img src={itemTwo.icon} key={itemTwo.name} />
                  ))}
                </div>
                <div className='pinnedProjectExternalLinks'>
                  {item.live && (
                    <a href={item.live} target='_blank'>
                      Live
                      <BiLink />
                    </a>
                  )}
                  {item.code && (
                    <a href={item.code} target='_blank'>
                      Code
            
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='projectsContentContainer'>
          {MyProjects.map((item, index) => (
            <div key={index} className='projectCardContainer'>
              <a className='projectExternalLink' href={item.live} target='_blank'>
                <h4>{item.name}</h4>
                <BiLink />
              </a>
              <p>{item.description}</p>
              <div className='technologiesContainer'>
                {item.technologies.map((itemTwo) => (
                  <img src={itemTwo.icon} alt={itemTwo.name} key={itemTwo.name} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
