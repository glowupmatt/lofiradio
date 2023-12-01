'use client'

import React , { useContext, useRef, useState, useEffect } from "react";
import { DataContext } from "@/context/AppContext";
import Image from "next/image";
import controlStyles from './SongControls.module.css'
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import Controller from "./Controller";
import AudioComp from "@/app/AudioComp";

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
  const { selectedSong, 
    audioRef, 
    songInfo, 
    selectedAlbum,
  } = useContext(DataContext);
  const { findAlbumThanHoldsSelectedSong } = props;
  const {image, artist} = findAlbumThanHoldsSelectedSong[0]
  const {name, audio, id} = selectedSong

  const [volume, setVolume] = useState(100)
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume, audioRef]);


  return (
      <div className={controlStyles.infoContainer}>
        <div className={controlStyles.songDetails}>
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
        </div>
        <Controller />
        <AudioComp />
        <div className={controlStyles.audioControls}>
          <VolumeUpIcon  sx={{color: "white" , width:'1.5rem', height:'1.5rem'}}/>
          <input 
          type="range" 
          className={controlStyles.audioSlider}
          min={0}
          max={100}
          value={volume}
          onChange={(e:any) => setVolume(e.target.value)}/>
        </div>
      </div>
  )
}

export default SongControls