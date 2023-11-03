import React from 'react'
import Card from '../Card'
import { useState, createContext } from "react"
import ReactPlayer from "react-player"
import { Link } from 'react-router-dom'

async function video_info(url) {
  const video_details = await fetch(url).then(res => res.json()).then(data => data.items);
  return video_details;
}

function multi_vid() {
  const urls = [
    "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=jEkwrWAkXV8&key=AIzaSyCckMN9kO-bjKT7FnTNFXdJ7DDcaI7b3eU",
    "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=7J4U__ZJTJY&key=AIzaSyCckMN9kO-bjKT7FnTNFXdJ7DDcaI7b3eU",
    "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=IXFX8Snp_GU&key=AIzaSyCckMN9kO-bjKT7FnTNFXdJ7DDcaI7b3eU",
    "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=a7BkJmTbohI&key=AIzaSyCckMN9kO-bjKT7FnTNFXdJ7DDcaI7b3eU",
    "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=TOZJYvUBYTo&key=AIzaSyCckMN9kO-bjKT7FnTNFXdJ7DDcaI7b3eU",
    "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=qzG2CeNCop8&key=AIzaSyCckMN9kO-bjKT7FnTNFXdJ7DDcaI7b3eU",
    "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=BuWZo8wJ__A&key=AIzaSyCckMN9kO-bjKT7FnTNFXdJ7DDcaI7b3eU",
    "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=tdUwWOZPn1M&key=AIzaSyCckMN9kO-bjKT7FnTNFXdJ7DDcaI7b3eU",
    "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=hnGMXfpxQDg&key=AIzaSyCckMN9kO-bjKT7FnTNFXdJ7DDcaI7b3eU",
    "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=n9LgeoJE4EI&key=AIzaSyCckMN9kO-bjKT7FnTNFXdJ7DDcaI7b3eU"
  ];
  const info = urls.map(video_info);
  return info;
}

const video_in = multi_vid();
const video_in1 = await video_in[0];
const video_in2 = await video_in[1];
const video_in3 = await video_in[2];
const video_in4 = await video_in[3];
const video_in5 = await video_in[4];
const video_in6 = await video_in[5];
const video_in7 = await video_in[6];
const video_in8 = await video_in[7];
const video_in9 = await video_in[8];
const video_in10 = await video_in[9];

export const cont = createContext();
export const current_idcont = createContext();
function Videos() {
  const [show, setShow] = useState(false);
  const [currid, setCurrid] = useState();
  return (
    <div className='videos-section'>
      <cont.Provider value={{ show, setShow }}>
        <current_idcont.Provider value={{currid,setCurrid}}>
          {!show ? (<>
            <h2>Recommended Videos</h2>
            <div className='videos' >
              <Card
                thumbnails={video_in1[0].snippet.thumbnails.medium.url}
                channelimage={"https://yt3.googleusercontent.com/ytc/APkrFKalmepdjbJtVosPFErq1lXLJpByOQ3RJz06Vut9MQ=s176-c-k-c0x00ffffff-no-rj"}
                title={video_in1[0].snippet.title}
                channelname={video_in1[0].snippet.channelTitle}
                views={`${video_in1[0].statistics.viewCount} views `}
                time="10 months ago"
                id={video_in1[0].id}
              />
              <Card
                thumbnails={video_in2[0].snippet.thumbnails.medium.url}
                channelimage={"https://yt3.googleusercontent.com/EBqTSlUklfmfPtYMRunVhWm02qq8OQ3uRP-BCh38fluI1gMJ3I8bZkAGeGm3oKUnSTZv8UgWjUU=s176-c-k-c0x00ffffff-no-rj"}
                title={video_in2[0].snippet.title}
                channelname={video_in2[0].snippet.channelTitle}
                views={`${video_in2[0].statistics.viewCount} views `}
                time="10 months ago"
                id={video_in2[0].id}
              />
              <Card
                thumbnails={video_in3[0].snippet.thumbnails.medium.url}
                channelimage={"https://yt3.googleusercontent.com/ytc/APkrFKZNUgKcp3QWYvD6ATuqG3-JRItD6OtBgHbJg91z=s176-c-k-c0x00ffffff-no-rj"}
                title={video_in3[0].snippet.title}
                channelname={video_in3[0].snippet.channelTitle}
                views={`${video_in3[0].statistics.viewCount} views `}
                time="10 months ago"
                id={video_in3[0].id}
              />
              <Card
                thumbnails={video_in4[0].snippet.thumbnails.medium.url}
                channelimage={"https://yt3.googleusercontent.com/7WZa4nYXdIFzNHatL5u9sxfD8o55KS2h-tPSwxSbFZGN8_MB8InWCC2A1Jbju132oDvQaLLoOg=s176-c-k-c0x00ffffff-no-rj"}
                title={video_in4[0].snippet.title}
                channelname={video_in4[0].snippet.channelTitle}
                views={`${video_in4[0].statistics.viewCount} views `}
                time="10 months ago"
                id={video_in4[0].id}
              />
              <Card
                thumbnails={video_in5[0].snippet.thumbnails.medium.url}
                channelimage={"https://yt3.googleusercontent.com/ytc/APkrFKZCuZ0z2TqenSHVovA3RbIimp6f2nLiE96PTo2apw=s176-c-k-c0x00ffffff-no-rj-mo"}
                title={video_in5[0].snippet.title}
                channelname={video_in5[0].snippet.channelTitle}
                views={`${video_in5[0].statistics.viewCount} views `}
                time="10 months ago"
                id={video_in5[0].id}
              />
              <Card
                thumbnails={video_in6[0].snippet.thumbnails.medium.url}
                channelimage={"https://yt3.ggpht.com/x0upGkXC1ecRLxFsT-Y__EcP5A3AzUHO_gwP_hWV2yppb6G8CNE6MWvWXmqnLOKhEkit7GbhNQ=s176-c-k-c0x00ffffff-no-rj-mo"}
                title={video_in6[0].snippet.title}
                channelname={video_in6[0].snippet.channelTitle}
                views={`${video_in6[0].statistics.viewCount} views `}
                time="10 months ago"
                id={video_in6[0].id}
              />
              <Card
                thumbnails={video_in7[0].snippet.thumbnails.medium.url}
                channelimage={"https://yt3.ggpht.com/ruhanJh77ZSaMRbtgqUIQkRMFVws45qdLKwcx39G8gVPs-qkFIPwyeWmvULYzRAqPChKTPWe2Q=s176-c-k-c0x00ffffff-no-rj-mo"}
                title={video_in7[0].snippet.title}
                channelname={video_in7[0].snippet.channelTitle}
                views={`${video_in7[0].statistics.viewCount} views `}
                time="10 months ago"
                id={video_in7[0].id}
                />
              <Card
                thumbnails={video_in8[0].snippet.thumbnails.medium.url}
                channelimage={"https://yt3.ggpht.com/neUz7AkcCV6k1eJgvH7kaTOQioCO8cOlzBw28c3l25-4NFedYzCyGa8T3Elg3VefnX-736wahWI=s176-c-k-c0x00ffffff-no-rj-mo"}
                title={video_in8[0].snippet.title}
                channelname={video_in8[0].snippet.channelTitle}
                views={`${video_in8[0].statistics.viewCount} views `}
                time="10 months ago"
                id={video_in8[0].id}
              />
              <Card
                thumbnails={video_in9[0].snippet.thumbnails.medium.url}
                channelimage={"https://yt3.googleusercontent.com/ytc/APkrFKbKod6WCrJzerQZcXA6eTpnVfkDMslAchG33RSTag=s176-c-k-c0x00ffffff-no-rj-mo"}
                title={video_in9[0].snippet.title}
                channelname={video_in9[0].snippet.channelTitle}
                views={`${video_in9[0].statistics.viewCount} views `}
                time="10 months ago"
                id={video_in9[0].id}
              />
              <Card
                thumbnails={video_in10[0].snippet.thumbnails.medium.url}
                channelimage={"https://yt3.googleusercontent.com/ytc/APkrFKbL_yIweNndrCpRFCeZHr4g5RKzoVI_ft4EcgiRmw=s176-c-k-c0x00ffffff-no-rj"}
                title={video_in10[0].snippet.title}
                channelname={video_in10[0].snippet.channelTitle}
                views={`${video_in10[0].statistics.viewCount} views `}
                time="10 months ago"
                id={video_in10[0].id}
              />

            </div>
          </>) : <Link to={'/playvideo'} ><ReactPlayer url={`https://www.youtube.com/watch?v=${currid}`} className="play" /></Link>}
        </current_idcont.Provider>
      </cont.Provider>
    </div>
  )
}

export default Videos