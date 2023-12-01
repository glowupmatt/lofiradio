import React, { useContext, useEffect, useRef } from 'react'
import { DataContext } from "@/context/AppContext";

type Props = {}

const AudioComp = (props: Props) => {
    const { 
        audioRef,
        isPlaying,
        selectedSong,
        timeUpdateHandler,
        nextSongHandler,
        } = useContext(DataContext);

      useEffect(() => {
        if (isPlaying && audioRef.current) {
          audioRef.current.play();
        } else if (!isPlaying && selectedSong && audioRef.current) {
          audioRef.current.pause();
        } else {
          return;
        }
      }, [audioRef, isPlaying, selectedSong]);
    
  return (
    <audio src={selectedSong.audio} 
                                    ref={audioRef} 
                                    onTimeUpdate={timeUpdateHandler} 
                                    onLoadedMetadata={timeUpdateHandler} 
                                    onEnded={nextSongHandler} />
  )
}

export default AudioComp