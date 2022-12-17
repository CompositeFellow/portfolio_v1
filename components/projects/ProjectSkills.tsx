import Image from 'next/image'
import React from 'react'
import { Skill } from '../constants/skills'

type ProjectSkillsProps = {
    skills: Skill[]
}

const ProjectSkills = ({skills}: ProjectSkillsProps) => {
    const skillList = skills.map((skill) => {
        return (
            <div key={skill.skill} className='flex flex-row h-[1rem] xl:mr-[1rem] my-[.5rem] items-center'>
                <Image 
                    className='w-[32px] h-[32px] mr-[.25rem] sm:mr-[0.5rem]' 
                    src={skill.iconPath} 
                    alt={skill.altTxt} 
                    width={32} 
                    height={32} 
                />
                <p className='text-orangeGrey text-[.5rem] font-VT323'>{skill.skill}</p>
            </div>
        )
    })
  return (
    <div className='w-full flex flex-row justify-evenly xl:justify-start'>
        {skillList}
    </div>
  )
}

export default ProjectSkills