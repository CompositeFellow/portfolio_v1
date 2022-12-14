import Image from 'next/image'
import React from 'react'
import { skillsArray } from '../constants/skills'
import SectionMainColumn from '../global/SectionMainColumn'

type HeroProps = {
    children?: React.ReactNode
    height: number
}

const skillsList = skillsArray.map((skill) => {
  return (
    <div key={skill.skill} className='flex flex-row w-[4rem] h-[1rem] my-[1rem] text-[0.5rem] text-[#FFFFFF]'>
      <Image className='w-[32px] h-[32px] mr-[0.5rem]' src={skill.iconPath} alt={skill.altTxt} width={32} height={32} />
      {skill.skill}
    </div>
  )
})

const Hero = ({children, height}: HeroProps) => {
  return (
    <SectionMainColumn height={height} id={'hero'} classname='flex flex-row px-[1rem] justify-center'>
        <div className='flex justify-end w-[13rem] min-h-[12rem] rounded-lg bg-fadedOrange mr-[1rem]'>
          <div className='w-[8rem] h-[10rem] rounded-lg bg-profilePic bg-cover bg-no-repeat'/>
          <div className='w-[5rem] pl-[1rem] flex-col'>
            {skillsList}
          </div>

        </div>
        <div className='w-[29rem] h-full ml-[1rem] flex flex-col items-end'>
          <h1 className='text-white text-[2rem] font-zenDots'>Hi, I&apos;m Trevor Danahy</h1>
          <h2 className='text-white text-[1.5rem] font-VT323'>Fullstack Developer</h2>
          <h3 className='text-white text-[1rem]'>Here is some of my work</h3>

        </div>

    </SectionMainColumn>
  )
}

export default Hero