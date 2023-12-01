'use client'

import React, {useContext} from 'react'
import { DataContext } from '@/context/AppContext';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import Pause from '@mui/icons-material/Pause';
import SongSelectionListStyles from '@/components/albumPageFolder/selectedAlbum/SongSelectionList.module.css'


type Props = {
    song: {
        name: string;
        id: string;
        credits: string;
        audio: string;
    }
    selectedAlbumFilter: {
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

const SongSelectionList = (props: Props) => {
    const { setSelectedSong, 
        selectedSong, 
        setIsPlaying, 
        isPlaying, 
        playSongHandler,
        
    } = useContext(DataContext);
    const { song, selectedAlbumFilter} = props;
    const selectedSoloSong = selectedAlbumFilter[0].songs.filter((song) => song.id === selectedSong.id )
    
  return (
    <div 
    className={selectedSoloSong[0]?.id === song.id
        ? SongSelectionListStyles.selectedSongContainer 
        : SongSelectionListStyles.songContainer} 
    key={song.id}
    onClick={() => {
        setSelectedSong(song)
        setIsPlaying(true)
        playSongHandler()}}>
        {selectedSoloSong[0]?.id === song.id && isPlaying ? <Pause sx={{color: "white"}}/>  : <PlayCircleFilledIcon sx={{color: "white"}}/>}
        <div className={SongSelectionListStyles.songInfoContainer}>
            <p className={SongSelectionListStyles.songName}>{song.name}</p>
            <p className={SongSelectionListStyles.songCredits}>{song.credits}</p>
        </div>
    </div>
  )
}

export default SongSelectionList