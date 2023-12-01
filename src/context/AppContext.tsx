'use client'

import React, {createContext, useState, useRef } from 'react'


type Props = {
    children: React.ReactNode;
}

type AppContextType = {
    selectedPage: string;
    setSelectedPage: React.Dispatch<React.SetStateAction<string>>;
    selectedAlbum: string;
    setSelectedAlbum: React.Dispatch<React.SetStateAction<string>>;
    selectedSong: {
      name: string;
      id: string;
      credits: string;
      audio: string;
  }
  setSelectedSong: React.Dispatch<React.SetStateAction<{
    name: string;
    id: string;
    credits: string;
    audio: string;
}>>
isPlaying: boolean;
setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
setSongId: React.Dispatch<React.SetStateAction<string>>;
songId: string;
songIndex: number;
setSongIndex: React.Dispatch<React.SetStateAction<number>>;
selectedSongsArray: {
  name: string;
  id: string;
  credits: string;
  audio: string;
}[];
setSelectedSongsArray: React.Dispatch<React.SetStateAction<{
  name: string;
  id: string;
  credits: string;
  audio: string;
}[]>>
audioRef: React.RefObject<HTMLAudioElement>;
songInfo : {
  current: number,
  duration: number,
  animation: number, 
};
setSongInfo: React.Dispatch<React.SetStateAction<{
  current: number;
  duration: number;
  animation: number;
}>>
playSongHandler: () => void;
timeUpdateHandler: (e: any) => void;
nextSongHandler: () => void;
  };


export const DataContext = createContext({} as AppContextType);

export default function AppContext({ children }: Props) {
const audioRef = useRef<HTMLAudioElement>(null)
const [selectedPage, setSelectedPage] = useState('homePage')
const [selectedAlbum, setSelectedAlbum] = useState("")
const [songId, setSongId] = useState("")
const [songIndex, setSongIndex] = useState(0)
const [selectedSong, setSelectedSong] = useState({
    name: "",
    id: "",
    credits: "",
    audio: ""
})
const [isPlaying, setIsPlaying] = useState(false)
const [selectedSongsArray, setSelectedSongsArray] = useState([{
  name: "",
  id: "",
  credits: "",
  audio: ""
}])

const [songInfo, setSongInfo] = useState({
  current: 0,
  duration: 0,
  animation: 0,
})

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


const timeUpdateHandler = (e: any) => {
  const current:number = e.target.currentTime
  const duration:number = e.target.duration
  const roundedCurrent = Math.round(current)
  const roundedDuration = Math.round(duration)
  const animation = Math.round((roundedCurrent / roundedDuration) * 100)
  setSongInfo({current, duration, animation})
}

const nextSongHandler = () => {
  const currentPlaylist = [...selectedSongsArray];
  currentPlaylist.shift();
  if (currentPlaylist.length >= 1 && audioRef.current) {
    setSongIndex(prev => prev + 1); 
    setSelectedSong(selectedSongsArray[songIndex + 1]);
    audioRef.current.load();
  } else {
    setIsPlaying(false);
    setSelectedSong({name: '', id: '', credits: '', audio: ''});
    setSelectedAlbum('');
  }
};

return (
    <DataContext.Provider
      value={
        {
            selectedPage,
            setSelectedPage,
            selectedAlbum,
            setSelectedAlbum,
            selectedSong,
            setSelectedSong,
            isPlaying, 
            setIsPlaying,
            songId,
            setSongId,
            songIndex,
            setSongIndex,
            selectedSongsArray,
            setSelectedSongsArray,
            audioRef,
            songInfo,
            setSongInfo,
            playSongHandler,
            timeUpdateHandler,
            nextSongHandler,
            
        } as AppContextType
      }
    >
      {children}
    </DataContext.Provider>
  );
}