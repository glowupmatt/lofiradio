import React from 'react'
import HomePageBody from '@/components/homePageBody/HomePageBody'
import AllAlbums from '@/components/albumPageFolder/AllAlbums'
import AllAlbumsStyles from './AllAlbums.module.css'
import { albums } from '@/app/music'

type Props = {}

const SelectAlbumPage = (props: Props) => {
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
        <AllAlbums getAlbums={getAlbums}/>
  )
}

export default SelectAlbumPage