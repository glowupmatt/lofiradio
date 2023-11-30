'use client'
import React, {useContext} from 'react'
import { DataContext } from '@/context/AppContext';
import NavBar from './navBarFolder/NavBar'
import childrenStyles from './HomePageBody.module.css'
import { useState } from 'react'
import Image from 'next/image'
import SongControls from "@/components/playerControls/SongControls";
import MobileNav from './navBarFolder/MobileNav';

type Props = {
  children: React.ReactNode;
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

const HomePageBody = (props: Props) => {
  const { children, findAlbumThanHoldsSelectedSong } = props

    const [navOpen, setNavOpen] = useState(false)
    const {
      selectedSong
    } = useContext(DataContext);
    
  return (
    <div className={childrenStyles.headerAndControlsContainer}>    
        <NavBar 
        navOpen={navOpen}
        setNavOpen={setNavOpen}
        />
       <MobileNav navOpen={navOpen}/>
        <main 
        className={navOpen 
          ? childrenStyles.mainBodyOpen 
          : childrenStyles.mainBody}
          style={
            selectedSong.audio !== "" ?  {height: '81vh'} : {height: '100vh'}}
          >{children}</main>
        {selectedSong.audio !== "" ?  
        <SongControls findAlbumThanHoldsSelectedSong={findAlbumThanHoldsSelectedSong} /> : null}
    </div>
  )
}

export default HomePageBody