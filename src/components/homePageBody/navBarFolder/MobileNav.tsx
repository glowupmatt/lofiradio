import React from 'react'
import Image from 'next/image'
import childrenStyles from '../HomePageBody.module.css'

type Props = {
    navOpen: boolean;
}

const MobileNav = (props: Props) => {
    const { navOpen } = props
    const menuIcons = [
        {title: 'Home' ,icon: '/MusicPlayerAssests/HomeIcon.svg', link: '/'},
        {title: 'Albums' ,icon: '/MusicPlayerAssests/MusicIcon.svg', link: '/'},
      ]
  return (
    <div className={navOpen ? childrenStyles.navOpen : childrenStyles.navClosed}>
          {menuIcons.map((icon) => {
            return (
              <div 
                key={icon.title} 
                className={childrenStyles.iconContainer}>
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