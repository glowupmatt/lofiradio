'use client'
import React, { useContext, useEffect, useRef } from 'react'
import { DataContext } from "@/context/AppContext";
import topSongs from './TopSongsComp.module.css'
import { albums } from '@/app/music'
import AlbumIcon from '@mui/icons-material/Album';
import { grey } from '@mui/material/colors';
import Image from 'next/image';


type Props = {}

const TopSongsComp = (props: Props) => {
    const { 
        setSelectedAlbum, 
        setSelectedPage, 
        setSelectedSong, 
        setIsPlaying,
        playSongHandler,

        } = useContext(DataContext);
    const topFiveSongs = albums.map((album) => {
        const albumCover = album.image;
        const topSong = album.songs[1];
        const artist = album.artist;
        const albumName = album.title;
        return {
            artist: artist,
            albumName: albumName,
            songName: topSong.name,
            cover: albumCover,
            topSong: topSong,
        }
    })


  return (
    <section>
        <div>
            <h3 className={topSongs.topSongTitle}>Top Songs</h3>
        </div>
        <div className={topSongs.sectionContainer}>
            {topFiveSongs.map((song, index) => {
                const { cover, songName, artist,albumName, topSong } = song;
                return (
                    <div 
                    key={index} 
                    className={topSongs.songCardContainer}
                    onClick={() => {
                        setSelectedAlbum(albumName)
                        setSelectedPage('songPage')
                        setSelectedSong(topSong)
                        setIsPlaying(true)
                        playSongHandler()
                        }}>
                        <div className={topSongs.songContainer}>
                            <div className={topSongs.songCover}>
                                <Image
                                src={cover} 
                                alt={songName}
                                width={1080}
                                height={1920} 
                                className={topSongs.songCover}/>
                            </div>
                
                            <div className={topSongs.songInfo}>
                                <h4 className={topSongs.songName}>{songName}</h4>
                                <h2 className={topSongs.artistName}>{artist}</h2>
                            </div>
                        </div>
                        <AlbumIcon sx={{color: grey[800], width: '50px', height: '50px'}}/>
                    </div>
                )
            })}
        </div>
    </section>
  )
}

export default TopSongsComp