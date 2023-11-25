import HomePageBody from '@/components/homePageBody/HomePageBody'
import React from 'react'
import { albums } from '@/app/music'
import SelectedAlbumStyles from '@/components/albumPageFolder/selectedAlbum/SelectedAlbumFile.module.css'
import SelectedAlbum from '@/components/albumPageFolder/selectedAlbum/SelectedAlbumFile'

type Props = {
    params:{
        albumTitle: string;
    }
}

const AlbumDisplayPage = (props: Props) => {
    const { params } = props;
    const selectedAlbum = albums.filter((album) => {
        return album.title === params.albumTitle.split('%20').join(' ')
    })
    const albumCover = selectedAlbum[0].image;
    const albumName = selectedAlbum[0].title;
    const artist = selectedAlbum[0].artist;
    const songs = selectedAlbum[0].songs;
  return (
    <main className={SelectedAlbumStyles.mainContainer}>
        <HomePageBody>
            <div 
            className={SelectedAlbumStyles.selectedAlbumMain} 
            style={{  
                background: `linear-gradient(180deg, rgba(29, 33, 35, 0.80) 40%,
                 rgb(11, 13, 24) 61.48%), url(${albumCover}), 
                 lightgray 50% / cover no-repeat`
            }}>
                <SelectedAlbum selectedAlbum={selectedAlbum}/>
            </div>
        </HomePageBody>
    </main>
  )
}

export default AlbumDisplayPage