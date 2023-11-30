'use client'

import React , { useContext, useRef, useState, useEffect } from "react";
import { DataContext } from "@/context/AppContext";
import Image from "next/image";
import controlStyles from './SongControls.module.css'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseIcon from '@mui/icons-material/Pause';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
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
  const { selectedSong, isPlaying, setIsPlaying, setSongIndex, songIndex, setSelectedSong, selectedSongsArray } = useContext(DataContext);
  const { findAlbumThanHoldsSelectedSong } = props;
  const {image, title, artist} = findAlbumThanHoldsSelectedSong[0]
  const {name, credits, audio, id} = selectedSong
  const [volume, setVolume] = useState(100)
  const audioRef = useRef<HTMLAudioElement>(null)
  const playSongHandler = () => {
    if (!isPlaying) {
      const playPromise = audioRef.current?.play()
      if (playPromise !== undefined) {
        playPromise.then((audio) => {
          audioRef.current?.play()
        })
      }
    } else {
      audioRef.current?.pause()
    }
  }
  
  const [songInfo, setSongInfo] = useState({
    current: 0,
    duration: 0,
    animation: 0,
  })

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume, audioRef]);

  const timeUpdateHandler = (e: any) => {
    const current:number = e.target.currentTime
    const duration:number = e.target.duration
    const roundedCurrent = Math.round(current)
    const roundedDuration = Math.round(duration)
    const animation = Math.round((roundedCurrent / roundedDuration) * 100)
    setSongInfo({
      current,
      duration,
      animation,
    })
  }

  const dragHandler = (e: any) => {
    audioRef.current!.currentTime = e.target.value
    setSongInfo({...songInfo, current: e.target.value})
  }

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
        <div className={controlStyles.mainControlsContainer}>
          <div className={controlStyles.controlsContainer}>
            {songIndex === 0 ? null : <SkipPreviousIcon  className={controlStyles.control}
            sx={{color: "white", width:'1.5rem', height:'1.5rem'}}
            onClick={() => {
              setSongIndex(prev => prev - 1); 
              setSelectedSong(selectedSongsArray[songIndex - 1]);
              setIsPlaying(false)
            }}/>}
             {isPlaying ?
           (<PauseIcon
           onClick={() => {   
            setIsPlaying(false)
            playSongHandler()}}
            className={controlStyles.control} 
            sx={{color: "white" , width:'1.5rem', height:'1.5rem'}}/>)
            : <PlayCircleIcon
            onClick={() => {   
              setIsPlaying(true)
              playSongHandler()}}
              className={controlStyles.control} 
            sx={{color: "white" , width:'1.5rem', height:'1.5rem'}}/>}
            <audio src={audio} id={id} ref={audioRef} onTimeUpdate={timeUpdateHandler} />
            <SkipNextIcon
            className={controlStyles.control} 
            onClick={() => {
              setSongIndex(prev => prev + 1); 
              setSelectedSong(selectedSongsArray[songIndex + 1]);
              setIsPlaying(false)
            }}
            
            sx={{color: "white" , width:'1.5rem', height:'1.5rem'}}/>
          </div>
          <input 
          type="range" 
          className={controlStyles.songSlider}
          min={0}
          max={songInfo?.duration}
          value={songInfo?.current}
          onChange={dragHandler}/>
        </div>
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