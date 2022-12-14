import React, { useEffect, useRef, useState } from 'react'
import { useFacePosition, useMousePosition } from '../_hooks';

type FaceLogoProps = {}

const FaceLogo = (props: FaceLogoProps) => {

  return (
    <div className='h-[1.5rem] w-[1.5rem] flex flex-col mt-[.25rem] mx-[.25rem] '>
          {/* <div className='w-full min-h-[.25rem] mb-[.25rem]'/> */}
          <div className='flex flex-row justify-center' >
            <div className='w-[.5rem] h-[.5rem] bg-white flex justify-center items-center' >
              <div className='flex flex-col' >
                {/* <div className='w-[.125rem] h-[.25rem] bg-white' /> */}
                <div className='w-[.125rem] h-[.125rem] bg-black' />
              </div>
            </div>
            <div className='w-[.25rem]'/>
            <div className='w-[.5rem] h-[.5rem] bg-white flex justify-center items-center' >
              <div className='flex flex-col'>
                {/* <div className='w-[.125rem] h-[.25rem] bg-white' /> */}
                <div className='w-[.125rem] h-[.125rem] bg-black' />
              </div>
            </div>
          </div>
          <div
            className='w-[1.5rem] mt-[0.25rem]'
            style={{ borderTop: '16px solid #b96829', borderLeft: '10px solid transparent', borderRight: '10px solid transparent' }}
          />
        </div>
  )
}

export default FaceLogo