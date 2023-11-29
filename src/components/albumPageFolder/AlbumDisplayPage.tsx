import HomePageBody from '@/components/homePageBody/HomePageBody'
import React, { useContext } from "react";
import { DataContext } from "@/context/AppContext";
import { albums } from '@/app/music'
import SelectedAlbumStyles from '@/components/albumPageFolder/selectedAlbum/SelectedAlbumFile.module.css'
import SelectedAlbum from '@/components/albumPageFolder/selectedAlbum/SelectedAlbumFile'

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

const AlbumDisplayPage = (props: Props) => {
    const { selectedAlbumFilter } = props;

    const albumCover = selectedAlbumFilter[0].image;
  return (
    <section className={SelectedAlbumStyles.mainContainer}>
            <div 
            className={SelectedAlbumStyles.selectedAlbumMain} 
            style={{  
                background: `linear-gradient(180deg, rgba(29, 33, 35, 0.80) 40%,
                 rgb(11, 13, 24) 61.48%), url(${albumCover}), 
                 lightgray 50% / cover no-repeat`
            }}>
                <SelectedAlbum selectedAlbumFilter={selectedAlbumFilter}/>
            </div>
    </section>
  )
}

export default AlbumDisplayPage