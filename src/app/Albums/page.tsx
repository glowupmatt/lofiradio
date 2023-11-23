import React from 'react'
import HomePageBody from '@/components/homePageBody/HomePageBody'
import AllAlbums from '@/components/albumPageFolder/AllAlbums'
import { albums } from '@/app/music'

type Props = {}

const page = (props: Props) => {
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
    <main>
        <HomePageBody>
            <h1>ALBUMS</h1>
            <AllAlbums getAlbums={getAlbums}/>
        </HomePageBody>
    </main>
  )
}

export default page