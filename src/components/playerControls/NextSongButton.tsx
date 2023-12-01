import React, {useContext, useState, useRef} from 'react'
import { DataContext } from '@/context/AppContext';
import controlStyles from './SongControls.module.css'
import SkipNextIcon from '@mui/icons-material/SkipNext';

type Props = {}

const NextSongButton = (props: Props) => {
    const { setIsPlaying, songIndex, setSongIndex, setSelectedSong, selectedSongsArray } = useContext(DataContext);
  return (
    <SkipNextIcon
    className={controlStyles.control} 
    onClick={() => {
      setSongIndex(prev => prev + 1); 
      setSelectedSong(selectedSongsArray[songIndex + 1]);
      setIsPlaying(true)
    }}
    sx={{color: "white" , width:'1.5rem', height:'1.5rem'}}/>
  )
}

export default NextSongButton