import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import { projects,moreProj } from '../constant/index.js'
import { ProjectCard } from '../component'

const Project = () => {
  return (
    <div className="proj">
      <Navbar />
       <div className="">
       <div className='project_card_wrap'>
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
       </div>
      <Footer />
    </div>
  )
}

export default Project