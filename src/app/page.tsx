'use client'

import React, { useContext } from "react";
import { DataContext } from "@/context/AppContext";
import HomePageBody from '@/components/homePageBody/HomePageBody'
import LandingPage from '@/components/landingPageFolder/LandingPage';
import SelectAlbumPage from '@/components/albumPageFolder/SelectAlbumPage';
import { albums } from "./music";
import AlbumDisplayPage from '@/components/albumPageFolder/AlbumDisplayPage';
import bodyStyles from './mainBodyStyles.module.css'

export default function Home() {
  const {
    selectedPage,
    selectedAlbum,
    selectedSong
  } = useContext(DataContext);
  const selectedAlbumFilter = albums.filter((album) => album.title === selectedAlbum)
  return (
    <HomePageBody selectedAlbumFilter={selectedAlbumFilter}>
        {selectedPage === 'homePage' ? <LandingPage /> 
        : selectedPage === 'albumPage' ? <SelectAlbumPage />
        : selectedPage === 'songPage' ? <AlbumDisplayPage 
        selectedAlbumFilter={selectedAlbumFilter}/>
        : <LandingPage />}
    </HomePageBody>

  )
}
