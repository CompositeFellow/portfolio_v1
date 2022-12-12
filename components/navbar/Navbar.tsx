import { ECDH } from 'crypto'
import React, { useEffect, useRef, useState } from 'react'
import { useFacePosition, useMousePosition } from '../_hooks'


type NavbarProps = {}

const Navbar = (props: NavbarProps) => {

  const face = useRef<HTMLDivElement>(null);
  const mousePos = useMousePosition()
  const facePos = useFacePosition(face)
  const [degrees, setDegrees] = useState(0)

  function angleToEyes() {
    const deltaX: number = (480 - mousePos.x); // 467
    const deltaY: number = (42 - mousePos.y); // 42
    const radians: number = Math.atan2(deltaY, deltaX)
    const deg: number = (radians * 180 / Math.PI) + 90

    setDegrees((d) => deg)
  }


  useEffect(() => {
    window.addEventListener("mousemove", angleToEyes)

    return () => {
      window.removeEventListener("mousemove", angleToEyes)
    }
  }, [mousePos, facePos, degrees])



  return (
    <div className='fixed top-0 w-[100vw] h-[4rem] flex'>
      <div className='grow' />
      <div className='w-[32px]' />
      <nav
        className=
        'bg-black h-full sm:w-[577px] md:w-[705px] lg:w-[961px] xl:w-[1217px] 2xl:w-[1473px]'
      >
        <div className='h-full w-[3rem] flex flex-col mt-[1rem]'>
          <div className='flex flex-row justify-center' ref={face}>
            <div className='w-[1rem] h-[1rem] bg-white flex justify-center items-center' >
              <div className='flex flex-col' style={{ transform: `rotate(${degrees}deg)` }}>
                <div className='w-[.25rem] h-[.5rem] bg-white' />
                <div className='w-[.25rem] h-[.25rem] bg-black' />
              </div>
            </div>
            <div className='w-[.5rem] h-[1rem]' />
            <div className='w-[1rem] h-[1rem] bg-white flex justify-center items-center'>
              <div className='flex flex-col' style={{ transform: `rotate(${degrees}deg)` }}>
                <div className='w-[.25rem] h-[.5rem] bg-white' />
                <div className='w-[.25rem] h-[.25rem] bg-black' />
              </div>
            </div>
          </div>
          <div
            className='w-[3rem] mt-[0.5rem]'
            style={{ borderTop: '64px solid #b96829', borderLeft: '20px solid transparent', borderRight: '20px solid transparent' }}
          />
        </div>
      </nav>
      <div className='w-[32px]' />
      <div className='grow' />
    </div>
  )
}

export default Navbar