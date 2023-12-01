'use client'

import React, {useContext, useState, useRef} from 'react'
import { DataContext } from '@/context/AppContext';
import controlStyles from './SongControls.module.css'
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
type Props = {}

const PrevSongButton = (props: Props) => {
    const { setIsPlaying, songIndex, setSongIndex, setSelectedSong, selectedSongsArray } = useContext(DataContext);
  return (
    <div> 
    {songIndex === 0 ? null : <SkipPreviousIcon  className={controlStyles.control}
    sx={{color: "white", width:'1.5rem', height:'1.5rem'}}
    onClick={() => {
      setSongIndex(prev => prev - 1); 
      setSelectedSong(selectedSongsArray[songIndex - 1]);
      setIsPlaying(true)
    }}/>}</div>
  )
}

export default PrevSongButton