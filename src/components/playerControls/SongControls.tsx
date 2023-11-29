'use client'

import React , { useContext } from "react";
import { DataContext } from "@/context/AppContext";
import Image from "next/image";
import controlStyles from './SongControls.module.css'

type Props = {
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

const SongControls = (props: Props) => {
  const { selectedSong } = useContext(DataContext);
  const { selectedAlbumFilter } = props;
  const {image, title, artist} = selectedAlbumFilter[0]
  const {name, credits, audio, id} = selectedSong
  return (
      <div className={controlStyles.infoContainer}>
        <Image 
        src={image} 
        alt={name}
        width={1080} 
        height={1920}
        className={controlStyles.coverArt}/> 
        <div className={controlStyles.infoText}>
          <h3 className={controlStyles.songName}>{title}</h3>
          <p className={controlStyles.artist}>{artist}</p>
        </div>
      </div>
  )
}

export default SongControls