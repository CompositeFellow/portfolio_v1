import React from 'react'

type MainColumnProps = {
    children?: React.ReactNode, 
}

const MainColumn = ({children}: MainColumnProps) => {
  return (
    <div className='w-full min-h-[120vh] col-start-3 col-end-4 bg-gridSize bg-gridPaper flex flex-col'>
      <div className='navbarOffset h-[4rem] w-full mb-[2rem]'/>
      {children}
    </div>
  )
}

export default MainColumn