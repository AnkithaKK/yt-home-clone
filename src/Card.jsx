import React from 'react'
import './Card.css'
import { useContext } from 'react'
import {cont} from "./Components/Videos"
import { current_idcont } from './Components/Videos'

function Card({ thumbnails, channelimage, title, channelname, views, time,id}) {
  const c= useContext(cont);
  const cid = useContext(current_idcont);
  const playit = (id)=>{
    cid.setCurrid(id);
    c.setShow(true);
  };
  return (
    <div className='card' onClick={()=>playit(id)}>
      <img src={thumbnails} alt='Thumbnail' className='thumbnail'></img> {/* Thumbnail */}
      <div className='card-details'>
        <img className='avatar' alt='avatar' src={channelimage}></img> {/*channel avatar */}
        <div className='video-details'>
          <h3 className='vid-title'>{title}</h3>
          <p className='channel-name'>{channelname.split(/(?=[A-Z])/g).join(" ")}</p>
          <p className='views-time'>{views}·{time}</p>
        </div>
      </div>
    </div>
  )
}

export default Card