import React from 'react'
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
  return (
    <div className={albumsStyles.albumList}>
        {getAlbums.map((album, index) => {
            return (
                <div className={albumsStyles.albumCard} key={index}>
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