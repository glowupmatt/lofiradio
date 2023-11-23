import React from 'react'
import Image from 'next/image'
import header from './NavBarStyles.module.css'
import DragHandleIcon from '@mui/icons-material/DragHandle';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';

type Props = {
  navOpen: boolean
  setNavOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function NavBar({navOpen, setNavOpen}: Props) {
  const onClickHandler = () => {
    setNavOpen((prev) => !prev)
  }
  return (
    <nav className={header.navBar}>
      <Link href={"/"}>
        <Image 
          src={"/MusicPlayerAssests/Lofi-Radio-logo.svg"}
          alt='Lofi Radio Logo'
          width={100}
          height={100}
          className={header.logo}
        />
      </Link>
      <div onClick={onClickHandler}>
        {navOpen ?  <CloseIcon /> : <DragHandleIcon />}
      </div>
    </nav>
  )
}

export default NavBar