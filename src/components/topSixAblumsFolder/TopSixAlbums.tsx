import React from 'react'
import { albums } from '@/app/music'
import topSixAlbums from './TopSixAlbums.module.css'

type Props = {}

const TopSixAlbums = (props: Props) => {
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
                <div key={index} className={topSixAlbums.albumCardContainer}>
                    <div className={topSixAlbums.songContainer}>
                            <img 
                            src={cover} 
                            alt={albumName} 
                            className={topSixAlbums.albumCover}
                            />
                        <div className={topSixAlbums.albumInfo}>
                            <h4 className={topSixAlbums.albumName}>{albumName}</h4>
                            <h2 className={topSixAlbums.artistName}>{artist}</h2>
                        </div>
                    </div>
                </div>
            )
        })}
    </div>
</section>
  )
}

export default TopSixAlbums