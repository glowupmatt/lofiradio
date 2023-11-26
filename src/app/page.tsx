'use client'

import React, { useContext } from "react";
import { DataContext } from "@/context/AppContext";
import HomePageBody from '@/components/homePageBody/HomePageBody'
import LandingPage from '@/components/landingPageFolder/LandingPage';
import SelectSongPage from '@/components/albumPageFolder/SelectAlbumPage';
import SelectedAlbumFile from "@/components/albumPageFolder/selectedAlbum/SelectedAlbumFile";
import { albums } from "./music";
import AlbumDisplayPage from '@/components/albumPageFolder/AlbumDisplayPage';
import AllAlbums from '@/components/albumPageFolder/AllAlbums';
import Album from "@mui/icons-material/Album";

export default function Home() {
  const {
    selectedPage,
    selectedAlbum,
  } = useContext(DataContext);
  const selectedAlbumFilter = albums.filter((album) => album.title === selectedAlbum)
  return (
    <main>
    <HomePageBody>
      {selectedPage === 'homePage' ? <LandingPage /> 
      : selectedPage === 'albumPage' ? <SelectSongPage />
      : selectedPage === 'songPage' ? <AlbumDisplayPage 
      selectedAlbumFilter={selectedAlbumFilter}/>
      : <LandingPage />}
    </HomePageBody>
   </main>
  )
}
