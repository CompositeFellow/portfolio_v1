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
    <div key={skill.skill} className='flex flex-row w-[4rem] h-[1rem] my-[.5rem] mx-[.5rem] lg:mx-[.5rem] 2xl:mx-[1rem] text-[0.5rem] text-[#FFFFFF]'>
      <Image className='w-[32px] h-[32px] mr-[0.5rem]' src={skill.iconPath} alt={skill.altTxt} width={32} height={32} />
      {skill.skill}
    </div>
  )
})

const Hero = ({children, height}: HeroProps) => {
  return (
    <SectionMainColumn height={height} id={'hero'} classname='flex flex-row flex-wrap mt-[1rem] xl:mt-[2rem]  justify-center'>
        <div className='w-full h-fit flex flex-col items-center text-center'>
          <h1 className='text-white text-[1.5rem]  md:text-[1.25rem] lg:text-[2rem] 2xl:text-[2.5rem] mb-[.5rem] font-zenDots'>Hello I&apos;m Trevor Danahy</h1>
          <h2 className='text-orangeDark italic text-[.75rem] lg:text-[1.25rem] 2xl:text-[1.75rem] font-zenDots mb-[.5rem]'>Fullstack Developer</h2>
          <h3 className='text-white text-[.5rem] lg:text-[1rem] font-zenDots'>Welcome to my Portfolio</h3>
        </div>
        <div className='flex w-full xl:w-[30rem] 2xl:w-[37rem]  sm:w-fit rounded-lg bg-fadedOrange mt-[1rem] md:mt-[3rem] flex-wrap justify-center'>
            {skillsList}
        </div>
    </SectionMainColumn>
  )
}

export default Hero