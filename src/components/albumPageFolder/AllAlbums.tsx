import React , { useContext } from "react";
import { DataContext } from "@/context/AppContext";
import albumsStyles from "./AllAlbums.module.css"
import Image from "next/image";
import { scrollToTop } from "@/utils/scrollToTop";

type Props = {
    getAlbums: {
        artist: string;
        albumName: string;
        cover: string;
    }[]
}

const AllAlbums = (props: Props) => {
    const { getAlbums } = props;
    const { setSelectedPage, setSelectedAlbum } = useContext(DataContext);
  return (
    <div className={albumsStyles.albumList}>
        {getAlbums.map((album, index) => {
            return (
                <div 
                onClick={() => 
                    {setSelectedAlbum(album.albumName)
                    setSelectedPage('songPage')
                    scrollToTop()
                }} 
                className={albumsStyles.albumCard} 
                key={index}>
                    <div className={albumsStyles.overlay}></div>
                    <Image
                    width={1080}
                    height={1920} 
                    src={album.cover} 
                    alt={album.albumName} 
                    className={albumsStyles.imageStyles}/>
                    <div className={albumsStyles.textStyles}>
                        <h3 className={albumsStyles.albumTitle}>{album.albumName}</h3>
                        <h4 className={albumsStyles.artistName}>{album.artist}</h4>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default AllAlbums