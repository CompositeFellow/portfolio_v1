import React from 'react'

type AsideProps = {
    children?: React.ReactNode,
    rightside?: boolean,
    leftside?: boolean,
    topLock?: boolean,
    bottomLock?: boolean,
}

const LinkAside = ({children, rightside}: AsideProps) => {
  return (
    <aside className={`hidden sm:flex  sm:w-[32px] bg-gridSize bg-gridHorizontal  ${(rightside ? 'col-start-2 col-end-3': 'col-start-4 col-end-5')}`}>
        {children}
    </aside>
  )
}

export default LinkAside