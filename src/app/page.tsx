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
    selectedSong,
    isPlaying,
    setSongId,
    songId,
    setSongIndex,
    songIndex,
    setSelectedSongsArray,
    selectedSongsArray
  } = useContext(DataContext);
  const selectedAlbumFilter = albums.filter((album) => album.title === selectedAlbum);
  const findAlbumThanHoldsSelectedSong = albums.filter((album) => album.songs.includes(selectedSong));
  //get the song id into a state
  setSongId(selectedSong.id);
  //get the index of the song from the array
  setSelectedSongsArray(findAlbumThanHoldsSelectedSong[0]?.songs);
  const selectedSongIndex = selectedSongsArray?.findIndex((song) => song.id === songId);
  setSongIndex(selectedSongIndex);
 
  return (
    <HomePageBody 
    findAlbumThanHoldsSelectedSong={findAlbumThanHoldsSelectedSong}>
        {selectedPage === 'homePage' ? <LandingPage /> 
        : selectedPage === 'albumPage' ? <SelectAlbumPage />
        : selectedPage === 'songPage' ? <AlbumDisplayPage 
        selectedAlbumFilter={selectedAlbumFilter}/>
        : <LandingPage />}
    </HomePageBody>

  )
}
