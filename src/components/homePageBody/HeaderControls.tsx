'use client'

import React, {useContext} from 'react'
import { DataContext } from '@/context/AppContext';
import NavBar from './navBarFolder/NavBar'
import Image from 'next/image'
import SongControls from "@/components/playerControls/SongControls";
import childrenStyles from './HomePageBody.module.css'

type Props = {
    navOpen: boolean;
    setNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
    menuIcons: {
        title: string;
        icon: string;
        link: string;
    }[];
    findAlbumThanHoldsSelectedSong: {
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

const HeaderControls = (props: Props) => {
    const { navOpen, setNavOpen, menuIcons, findAlbumThanHoldsSelectedSong } = props
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
    {selectedSong.audio !== "" ?  
        <SongControls findAlbumThanHoldsSelectedSong={findAlbumThanHoldsSelectedSong} /> : null}
    </div>
  )
}

export default HeaderControls