'use client'
import React, {useContext, useState, useRef} from 'react'
import { DataContext } from '@/context/AppContext';
import controlStyles from './SongControls.module.css'
import PlayPauseButton from './PlayPauseButton';
import PrevSongButton from './PrevSongButton';
import NextSongButton from './NextSongButton';
import SongDurationBar from './SongDurationBar';

type Props = {
}

const Controller = (props: Props) => {
  return (
    <div className={controlStyles.mainControlsContainer}>
          <div className={controlStyles.controlsContainer}>
           <PrevSongButton />
            <PlayPauseButton />
            <NextSongButton />
          </div>
         <SongDurationBar />
      </div>
  )
}

export default Controller