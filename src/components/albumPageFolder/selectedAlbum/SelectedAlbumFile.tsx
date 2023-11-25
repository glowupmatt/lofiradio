import React from 'react'
import Image from 'next/image'
import SelectedAlbumStyles from '@/components/albumPageFolder/selectedAlbum/SelectedAlbumFile.module.css'
import SongSelectionList from './SongSelectionList';

type Props = {
  selectedAlbum: {
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


const SelectedAlbumFile = (props: Props) => {
  const { selectedAlbum } = props;
  const albumCover = selectedAlbum[0].image;
  const albumName = selectedAlbum[0].title;
  const artist = selectedAlbum[0].artist;
  const songs = selectedAlbum[0].songs;
  console.log(songs)
  return (
    <section className={SelectedAlbumStyles.sectionContainer}>
      <Image 
        src={albumCover} 
        alt={albumName} 
        width={1080} 
        height={1920}
        className={SelectedAlbumStyles.albumCover}
      />
      <div className={SelectedAlbumStyles.albumInfo}>
        <h1 className={SelectedAlbumStyles.albumName}>{albumName}</h1>
        <h2 className={SelectedAlbumStyles.artist}>{artist}</h2>
        <div className={SelectedAlbumStyles.songsContainer}>
          {songs.map((song, index) => {
            return (
             <SongSelectionList song={song} key={index}/>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default SelectedAlbumFile