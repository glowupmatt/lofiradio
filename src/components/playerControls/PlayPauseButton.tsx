'use client'

import React, {useContext, useState, useRef} from 'react'
import { DataContext } from '@/context/AppContext';
import controlStyles from './SongControls.module.css'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseIcon from '@mui/icons-material/Pause';

type Props = {
 
}

const PlayPauseButton = (props: Props) => {
    const { isPlaying, setIsPlaying, playSongHandler } = useContext(DataContext);
   
  return (
    <div> {isPlaying ?
        (
        <PauseIcon 
        onClick={() => {setIsPlaying(false); playSongHandler()}}
        className={controlStyles.control} 
        sx={{color: "white" , width:'1.5rem', height:'1.5rem'}}/>
        )
        : 
        (
        <PlayCircleIcon
        onClick={() => { setIsPlaying(true); playSongHandler()}}
        className={controlStyles.control} 
        sx={{color: "white" , width:'1.5rem', height:'1.5rem'}}/>
        )}
         
         </div>
  )
}

export default PlayPauseButton