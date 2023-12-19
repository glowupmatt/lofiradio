'use client'

import React, {useContext} from 'react'
import { DataContext } from '@/context/AppContext';
import Image from 'next/image'
import childrenStyles from '../HomePageBody.module.css'

type Props = {
    navOpen: boolean;
    setNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileNav = (props: Props) => {
    const {setSelectedPage} = useContext(DataContext)
    const { navOpen, setNavOpen } = props
    const menuIcons = [
        {title: 'Home' ,icon: '/MusicPlayerAssests/HomeIcon.svg', link: 'homePage'},
        {title: 'Albums' ,icon: '/MusicPlayerAssests/MusicIcon.svg', link: 'albumPage'},
      ]
  return (
    <div className={navOpen ? childrenStyles.navOpen : childrenStyles.navClosed}>
          {menuIcons.map((icon) => {
            return (
              <div 
                key={icon.title} 
                className={childrenStyles.iconContainer}
                onClick={() => {
                  setNavOpen(false)
                  setSelectedPage(icon.link)}}
                >
                <Image 
                width={100}
                height={100}
                  src={icon.icon} 
                  alt={icon.title} 
                  className={childrenStyles.icon}/>
                <p>{icon.title}</p>
              </div>
            )
          })}
        </div>
  )
}

export default MobileNav