'use client'

import React, {useContext} from 'react'
import { DataContext } from '@/context/AppContext';
import controlStyles from './SongControls.module.css'
type Props = {

}

const SongDurationBar = (props: Props) => {
  const { audioRef, songInfo, setSongInfo } = useContext(DataContext);

    const dragHandler = (e: any) => {
        audioRef.current!.currentTime = e.target.value
        setSongInfo({...songInfo, current: e.target.value})
      }
    
  return (
    <input 
    type="range" 
    className={controlStyles.songSlider}
    min={0}
    max={`${songInfo?.duration}`}
    value={songInfo?.current}
    onChange={dragHandler}/>
  )
}

export default SongDurationBar