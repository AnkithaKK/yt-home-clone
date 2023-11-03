import React from 'react';
import Card from '../Card';
import { useContext } from 'react';
import { searchcont } from '../Context/Searchcontext';

function Searchresults() {
  const {searchres} = useContext(searchcont) ;
  return (
    <div>
      {searchres.map((res, index) => {
        console.log(searchres[index]);
        return (
        <Card
          key={index}
          thumbnails={searchres[index].snippet.thumbnails.medium.url}
          channelimage={
            "https://yt3.googleusercontent.com/ytc/APkrFKZNUgKcp3QWYvD6ATuqG3-JRItD6OtBgHbJg91z=s176-c-k-c0x00ffffff-no-rj"
          }
          title={searchres[index].snippet.title}
          channelname={searchres[index].snippet.channelTitle}        
          id={searchres[index].id}
        />
        )
        })}
    </div>
  );
}

export default Searchresults;
