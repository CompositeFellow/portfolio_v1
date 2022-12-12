import React from 'react'
import Navbar from '../navbar/Navbar'

type LayoutProps = {
    children?: React.ReactNode,
}

const Layout = ({children}: LayoutProps) => {
  return (
    <main className='
      w-full min-h-full black 
      sm:grid sm:grid-cols-mainSm md:grid-cols-mainMd lg:grid-cols-mainLg xl:grid-cols-mainXl 2xl:grid-cols-main2xl
      gap-0'
    >
        {children}
    </main>
  )
}

export default Layout