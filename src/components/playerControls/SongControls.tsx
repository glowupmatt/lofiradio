'use client'

import React , { useContext } from "react";
import { DataContext } from "@/context/AppContext";
import Image from "next/image";
import controlStyles from './SongControls.module.css'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseIcon from '@mui/icons-material/Pause';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';

type Props = {
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

const SongControls = (props: Props) => {
  const { selectedSong } = useContext(DataContext);
  const { findAlbumThanHoldsSelectedSong } = props;
  const {image, title, artist} = findAlbumThanHoldsSelectedSong[0]
  const {name, credits, audio, id} = selectedSong
  return (
      <div className={controlStyles.infoContainer}>
        <Image 
        src={image} 
        alt={name}
        width={1080} 
        height={1920}
        className={controlStyles.coverArt}/> 
        <div className={controlStyles.infoText}>
          <h3 className={controlStyles.songName}>{name}</h3>
          <p className={controlStyles.artist}>{artist}</p>
        </div>
        <div className={controlStyles.controlsContainer}>
          <SkipPreviousIcon
          className={controlStyles.control}
          sx={{color: "white", width:'1.5rem', height:'1.5rem'}}/>
          <PlayCircleIcon
          className={controlStyles.control} 
          sx={{color: "white" , width:'1.5rem', height:'1.5rem'}}/>
          <SkipNextIcon
          className={controlStyles.control} 
          sx={{color: "white" , width:'1.5rem', height:'1.5rem'}}/>
        </div>
      </div>
  )
}

export default SongControls