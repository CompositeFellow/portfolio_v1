import React from 'react'
import { projectsArray } from '../constants/projects'
import SectionMainColumn from '../global/SectionMainColumn'
import Project from './Project'

type ProjectListProps = {
}

const ProjectList = ({}: ProjectListProps) => {
    const projectList = projectsArray.map((project) => {
        return(<Project key={project.name} project={project} />)
        
    })

 // Logtar is learning to code and doesnt' know how to make comments, now he knows.  
  return (
    <SectionMainColumn  id="projects" classname='flex flex-col items-center justify-center h-fit'> 
        <div className="w-full h-fit flex flex-col justify-center items-center">
            {projectList}
        </div>
        
    </SectionMainColumn>
  )
}

export default ProjectList