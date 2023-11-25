'use client'

import React, { useContext } from "react";
import { DataContext } from "@/context/AppContext";
import HomePageBody from '@/components/homePageBody/HomePageBody'
import { albums } from "./music";
import LandingPage from '@/components/landingPageFolder/LandingPage';
import AlbumDisplayPage from '@/components/albumPageFolder/AlbumDisplayPage';
import SelectSongPage from '@/components/albumPageFolder/SelectAlbumPage';
import AllAlbums from '@/components/albumPageFolder/AllAlbums';
import SelectedAlbumFile from "@/components/albumPageFolder/selectedAlbum/SelectedAlbumFile";

export default function Home() {
  const {
    selectedPage,
    setSelectedPage,
  } = useContext(DataContext);
  return (
    <main>
    <HomePageBody>
      {selectedPage === 'homePage' ? <LandingPage /> 
      : selectedPage === 'albumPage' ? <SelectSongPage />
      : selectedPage === 'songPage' ? <SelectedAlbumFile />
      : <LandingPage />}
    </HomePageBody>
   </main>
  )
}
