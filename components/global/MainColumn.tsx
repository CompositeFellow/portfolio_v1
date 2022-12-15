import React from 'react'

type MainColumnProps = {
    children?: React.ReactNode, 
}

const MainColumn = ({children}: MainColumnProps) => {
  return (
    <div className=' w-full min-h-[120vh] col-start-3 col-end-4 bg-gridSize bg-gridPaper flex flex-col'>
      <div className='hidden sm:block navbarOffset h-[4rem] w-full'/>
      {children}
    </div>
  )
}

export default MainColumn