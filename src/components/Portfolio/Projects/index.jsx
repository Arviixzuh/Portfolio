import React from 'react'
import { BiLink } from 'react-icons/bi'
import { MyProjects, MyPinnedProjects } from './MyProjects'
import './Projects.scss'

export const Projects = () => {
  return (
    <section>
      <div className='projectsContainer'>
        <h2>Projects</h2>
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
                <button>
                  Live
                  <BiLink />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className='projectsContentContainer'>
          {MyProjects.map((item, index) => (
            <div key={index} className='projectCardContainer'>
              <div className='projectExternalLink'>
                <h4>{item.name}</h4>
                <BiLink />
              </div>
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
