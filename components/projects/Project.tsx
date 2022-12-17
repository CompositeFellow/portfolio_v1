import React from 'react'
import { Project } from '../constants/projects'
import ProjectImage from './ProjectImage'
import ProjectInfo from './ProjectInfo'

type ProjectProps = {
    project: Project
}

const Project = ({project}: ProjectProps) => {


  return (
    <div 
        className='h-fit w-[320px] sm:w-[16rem] lg:w-[24rem] xl:w-[36rem] 
        mx-[2rem] my-[1rem] 
        sm:border-b-[8px] sm:border-r-[8px] border-solid border-orangeTransparent'
    >
        <div className='bg-fadedOrange w-full h-fit flex flex-col items-center'>
            <div className='w-full flex flex-row flex-wrap justify-center'>
                <ProjectImage picPath={project.picPath} />
                <ProjectInfo 
                    name = {project.name}
                    description={project.description} 
                    skillsUsed={project.skillsUsed} 
                    codeLink={project.codeLink}
                    live={project.live} 
                    projectUrl={project.url}
                />
            </div>
        </div>
    </div>
  )
}

export default Project