'use client'
import React, {useContext} from 'react'
import { DataContext } from '@/context/AppContext';
import NavBar from './navBarFolder/NavBar'
import childrenStyles from './HomePageBody.module.css'
import { useState } from 'react'
import Image from 'next/image'
import SongControls from "@/components/playerControls/SongControls";

type Props = {
  children: React.ReactNode;
  selectedAlbumFilter: {
    title: string;
    artist: string;
    image: string;
    mainColor: string;
    secondColor: string;
    songs: {
        name: string;
        id: string;
        credits: string;
        audio: string;
    }[];
}[]
}

const HomePageBody = (props: Props) => {
  const { children, selectedAlbumFilter } = props
  const menuIcons = [
    {title: 'Home' ,icon: '/MusicPlayerAssests/HomeIcon.svg', link: '/'},
    {title: 'Albums' ,icon: '/MusicPlayerAssests/MusicIcon.svg', link: '/'},
  ]
    const [navOpen, setNavOpen] = useState(false)
    const {
      selectedPage,
      selectedAlbum,
      selectedSong
    } = useContext(DataContext);
  return (
    <div className={childrenStyles.headerAndControlsContainer}>    
        <NavBar 
        navOpen={navOpen}
        setNavOpen={setNavOpen}
        />
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
        <div 
        className={navOpen 
          ? childrenStyles.mainBodyOpen 
          : childrenStyles.mainBody}
          style={
            selectedSong.audio !== "" ?  {height: '81vh'} : {height: '100vh'}}
          >{children}</div>
        {selectedSong.audio !== "" ?  
        <SongControls selectedAlbumFilter={selectedAlbumFilter} /> : null}
    </div>
  )
}

export default HomePageBody