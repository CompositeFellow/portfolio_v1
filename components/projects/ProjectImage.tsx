import Image from 'next/image';
import React from 'react'
import { useIsMobile } from '../_hooks'

type ProjectImageProps = {
    picPath : string
}

const ProjectImage = ({picPath}: ProjectImageProps) => {
    const isMobile = useIsMobile();

  return (
    <div className='
        object-fill w-[320px] h-[320px] mb-[1rem]
        sm:w-[480px] sm:h-[480px] sm:mt-[1rem]
        sm:mx-[1rem] xl:mx-[2rem]'
    >
        {(isMobile ?
            <Image 
                src={picPath} 
                alt='Picture of the project' 
                width={320} height={320} 
                className='w-[320px] h-[320px]' 
            /> :
            <Image 
                src={picPath} 
                alt='Picture of the project' 
                width={480} height={480} 
                className='w-[480px] h-[480px]' 
            />
        )}
    </div>
  )
}

export default ProjectImage