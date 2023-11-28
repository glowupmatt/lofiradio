import React, { useContext } from "react";
import { DataContext } from "@/context/AppContext";
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
  const {
    setSelectedPage,
  } = useContext(DataContext)
  return (
    <nav className={header.navBar}>
      <div onClick={() => setSelectedPage("homePage")}>
        <Image 
          src={"/MusicPlayerAssests/Lofi-Radio-logo.svg"}
          alt='Lofi Radio Logo'
          width={100}
          height={100}
          className={header.logo}
        />
      </div>
      <div 
      className={header.menuIcon}
      onClick={onClickHandler}>
        {navOpen ?  <CloseIcon /> : <DragHandleIcon />}
      </div>
    </nav>
  )
}

export default NavBar