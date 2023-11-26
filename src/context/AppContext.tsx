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
  };


export const DataContext = createContext({} as AppContextType);

export default function AppContext({ children }: Props) {
const [selectedPage, setSelectedPage] = useState('homePage')
const [selectedAlbum, setSelectedAlbum] = useState("")

return (
    <DataContext.Provider
      value={
        {
            selectedPage,
            setSelectedPage,
            selectedAlbum,
            setSelectedAlbum
        } as AppContextType
      }
    >
      {children}
    </DataContext.Provider>
  );
}