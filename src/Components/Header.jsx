import React from 'react'
import { useState,useContext } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import VideoCallSharpIcon from '@mui/icons-material/VideoCallSharp';
import NotificationsNoneSharpIcon from '@mui/icons-material/NotificationsNoneSharp';
import Avatar from '@mui/icons-material/AccountCircle';
import { showcont } from '../Context/Menucontext';
import { Link ,useNavigate} from 'react-router-dom';
import { searchcont } from '../Context/Searchcontext';

function Header() {
  const [word,setWord] = useState();
  const {show} = useContext(showcont);
  const {setSearchres} = useContext(searchcont);

  const handleclick = async(search)=>{
      const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelType=any&maxResults=50&q=${word}&key=AIzaSyCckMN9kO-bjKT7FnTNFXdJ7DDcaI7b3eU`
      ).then(res=>res.json()).then(data=>data.items);
      setSearchres(response); 
  };

  return (
    <div className='header' >
      <div className='logo-container' >
        <MenuIcon className='menu' onClick={show}/>
        <Link to={'/'}><img className='logo' src='https://vectorseek.com/wp-content/uploads/2021/01/YouTube-Logo-Vector.png'></img></Link>
      </div>
      <div className='middle-container'>
        <div className='search-container' >
          <input type='text' placeholder='Search' value={word} onChange={(e)=>setWord(e.target.value)}></input>
          <Link to={'/search'}><button className='search-btn' onClick={handleclick}><SearchIcon className='icon' /></button></Link>
        </div>
        <KeyboardVoiceIcon className='mic' />
      </div>
      <div className='right-container' >
        <button className='right-icon'><VideoCallSharpIcon className='icon' /> </button>
        <button className='right-icon'><NotificationsNoneSharpIcon className='icon'/> </button>
        <button  className='avatar'><Avatar className='avatar-icon'src='https://lh3.googleusercontent.com/a/ACg8ocJtj2SekexRz1beJQbaU9dlYmqeBW1k2DNp-cNYVlBF=s576-c-no' /></button>
      </div>
    </div>
  )
}

export default Header