import React , { useContext } from "react";
import { DataContext } from "@/context/AppContext";
import albumsStyles from "./AllAlbums.module.css"

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
                }} 
                className={albumsStyles.albumCard} 
                key={index}>
                    <div className={albumsStyles.overlay}></div>
                    <img 
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