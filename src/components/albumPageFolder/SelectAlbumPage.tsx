import React from 'react'
import HomePageBody from '@/components/homePageBody/HomePageBody'
import AllAlbums from '@/components/albumPageFolder/AllAlbums'
import { albums } from '@/app/music'

type Props = {}

const SelectSongPage = (props: Props) => {
    const getAlbums = albums.map((album) => {
        const albumCover = album.image;
        const albumName = album.title;
        const artist = album.artist;
        return {
            artist: artist,
            albumName:albumName,
            cover: albumCover,
        }
    })
  return (
    <div>
        <h1>ALBUMS</h1>
        <AllAlbums getAlbums={getAlbums}/>
    </div>
  )
}

export default SelectSongPage