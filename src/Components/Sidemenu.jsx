import React from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import HistoryIcon from '@mui/icons-material/History';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import PlaylistPlaySharpIcon from '@mui/icons-material/PlaylistPlaySharp';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Sidelist from '../Sidelist'
import Sidelistmenu from '../Sidelistmenu';
import '../Sidelist.css'
import '../Sidelistmenu.css'
import { useContext } from 'react';
import { showcont } from '../Context/Menucontext';

function Sidemenu() {
  const { showmenu } = useContext(showcont);
  return (
    <div className='sidemenu-container'>
      {!showmenu && (<>
        <div className='side'>
          <Sidelistmenu Icon={HomeOutlinedIcon} title="Home" />
          <Sidelistmenu Icon={HomeOutlinedIcon} title="Shorts" />
          <Sidelistmenu Icon={SubscriptionsOutlinedIcon} title="Subscriptions" />
          <Sidelistmenu Icon={VideoLibraryOutlinedIcon} title="Library" />
        </div>
      </>)}
      {showmenu && (<>
        <div className='sidemenu'>
          <Sidelist Icon={HomeOutlinedIcon} title="Home" />
          <Sidelist Icon={HomeOutlinedIcon} title="Shorts" />
          <Sidelist Icon={SubscriptionsOutlinedIcon} title="Subscriptions" />
          <hr />
          <Sidelist Icon={VideoLibraryOutlinedIcon} title="Library" />
          <Sidelist Icon={HistoryIcon} title="History" />
          <Sidelist Icon={WatchLaterOutlinedIcon} title="Watch later" />
          <Sidelist Icon={PlaylistPlaySharpIcon} title="Playlist" />
          <Sidelist Icon={ExpandMoreIcon} title="Show more" />
          <hr />
        </div>
      </>)}
    </div>

  )
}

export default Sidemenu