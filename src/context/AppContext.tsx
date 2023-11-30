'use client'

import React, {createContext, useState } from 'react'


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
  };


export const DataContext = createContext({} as AppContextType);

export default function AppContext({ children }: Props) {
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
            setSelectedSongsArray
        } as AppContextType
      }
    >
      {children}
    </DataContext.Provider>
  );
}