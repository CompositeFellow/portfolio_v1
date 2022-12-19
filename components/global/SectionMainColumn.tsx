import React from 'react'

type SectionMainColumnProps = {
    children?: React.ReactNode
    id?: string
    classname?: string
}

// Section height is controlled in tailwindconfig under the gridRow extension  
// There is a margin bottom of 2 span(64px),  The spans are in increments of 5 + 2 to account for the bottom margin. only implemented to 25 
// When implemented put 5,10.. etc to get a height of 5 or 10 or 15 rows plus a bottom margin of 2(64px)

const SectionMainColumn = ({children, id, classname}: SectionMainColumnProps) => {
  return (
        <section id={id} className={`w-full h-fit mb-[2rem] ${classname}`} >
            {children}
        </section>
    )
  }


export default SectionMainColumn