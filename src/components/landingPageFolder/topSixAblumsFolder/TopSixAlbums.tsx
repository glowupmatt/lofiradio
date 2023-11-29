import React, { useContext } from 'react'
import { DataContext } from "@/context/AppContext";
import { albums } from '@/app/music'
import topSixAlbums from './TopSixAlbums.module.css'
import Image from 'next/image'
import { scrollToTop } from '@/utils/scrollToTop'

type Props = {}

const TopSixAlbums = (props: Props) => {
    const { setSelectedAlbum, setSelectedPage } = useContext(DataContext);
    const topFiveSongs = albums.map((album) => {
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
    <section>
    <div>
        <h3 className={topSixAlbums.topAlbumTitle}>Top Six Albums</h3>
    </div>
    <div className={topSixAlbums.sectionContainer}>
        {topFiveSongs
        .slice(Math.floor(topFiveSongs.length / 3))
        .map((song, index) => {
            const { cover, albumName, artist } = song;
            return (
                <div 
                key={index} 
                className={topSixAlbums.albumCardContainer}
                onClick={() => {
                setSelectedAlbum(albumName)
                setSelectedPage('songPage')
                scrollToTop()}}
                >   
                    <Image
                    width={1080}
                    height={1920} 
                    src={cover} 
                    alt={albumName} 
                    className={topSixAlbums.albumCover}
                    />
                    <div className={topSixAlbums.albumInfo}>
                        <h4 className={topSixAlbums.albumName}>{albumName}</h4>
                        <h2 className={topSixAlbums.artistName}>{artist}</h2>
                    </div>
                </div>
            )
        })}
    </div>
</section>
  )
}

export default TopSixAlbums