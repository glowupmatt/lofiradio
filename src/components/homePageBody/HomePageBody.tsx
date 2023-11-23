'use client'
import React from 'react'
import NavBar from '../navBarFolder/NavBar'
import childrenStyles from './HomePageBody.module.css'
import { useState } from 'react'

type Props = {
  children: React.ReactNode;
}

const HomePageBody = (props: Props) => {
  const { children } = props
  const menuIcons = [
    {title: 'Home' ,icon: '/MusicPlayerAssests/HomeIcon.svg', link: '/'},
    {title: 'Albums' ,icon: '/MusicPlayerAssests/MusicIcon.svg', link: '/'},
  ]
    const [navOpen, setNavOpen] = useState(false)
  return (
    <div className='w-full'>    
        <NavBar 
        navOpen={navOpen}
        setNavOpen={setNavOpen}
        />
        <div className={navOpen ? childrenStyles.navOpen : childrenStyles.navClosed}>
          <div>{menuIcons.map((icon) => {
            return (
              <div 
                key={icon.title} 
                className={childrenStyles.iconContainer}>
                <img 
                  src={icon.icon} 
                  alt={icon.title} 
                  className={childrenStyles.icon}/>
                <p>{icon.title}</p>
              </div>
            )
          })}</div>
        </div>
        <div className={childrenStyles.mainBody}>{children}</div>
        <h2 className={childrenStyles.footerTitle}>© 2023 Lofi Radio</h2>
    </div>
  )
}

export default HomePageBody