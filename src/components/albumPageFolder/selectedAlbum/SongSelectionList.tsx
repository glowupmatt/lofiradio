import React from 'react'
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import SongSelectionListStyles from '@/components/albumPageFolder/selectedAlbum/SongSelectionList.module.css'

type Props = {
    song: {
        name: string;
        id: string;
        credits: string;
        audio: string;
    }
}

const SongSelectionList = (props: Props) => {
    const { song } = props;
  return (
    <div className={SongSelectionListStyles.songContainer} key={song.id}>
        <PlayCircleFilledIcon sx={{color: "white"}}/>
        <div className={SongSelectionListStyles.songInfoContainer}>
            <p className={SongSelectionListStyles.songName}>{song.name}</p>
            <p className={SongSelectionListStyles.songCredits}>{song.credits}</p>
        </div>
    </div>
  )
}

export default SongSelectionList