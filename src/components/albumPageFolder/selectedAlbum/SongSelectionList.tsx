import React, {useContext} from 'react'
import { DataContext } from '@/context/AppContext';
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
    const { setSelectedSong } = useContext(DataContext);
    const { song } = props;
  return (
    <div 
    className={SongSelectionListStyles.songContainer} 
    key={song.id}
    onClick={() => setSelectedSong(song)}>
        <PlayCircleFilledIcon sx={{color: "white"}}/>
        <div className={SongSelectionListStyles.songInfoContainer}>
            <p className={SongSelectionListStyles.songName}>{song.name}</p>
            <p className={SongSelectionListStyles.songCredits}>{song.credits}</p>
        </div>
    </div>
  )
}

export default SongSelectionList