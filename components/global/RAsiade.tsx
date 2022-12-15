import Image from 'next/image'
import React, { useState } from 'react'
import LinkAside from './LinkAside'

type RAsiadeProps = {}

const RAsiade = (props: RAsiadeProps) => {
    const [showPopup, setShowPopup] = useState(false);

    const handleClick = () => {
        setShowPopup(true)
        navigator.clipboard.writeText("trevor.danahy@gmail.com")
        setTimeout(() => setShowPopup(false), 2000)
    }

  return (
    <LinkAside rightside={true}>
        <div className={`relative top-[-.125rem] left-[-3rem] w-[6rem] text-orangeTransparent text-[.5rem] ${(showPopup ? 'flex': 'hidden')}`} style={{border: "1px solid #ff8f394a"}}>
            Email copied to clipboard
        </div>
        <button  onClick={handleClick}>
            <div className="w-[1rem] h-[1rem] mb-[.5rem]">
                <Image src="/assets/icons/mail.svg" width={32} height={32} alt='Email Icon' />
            </div>
        </button>
    </LinkAside>
  )
}

export default RAsiade