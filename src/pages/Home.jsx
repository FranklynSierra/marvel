import React from 'react'
import useFetch from '../useFetch';


import ImageHome from '../components/imagehome/ImageHome';

import EventHome from '../components/imagehome/Eventhome';
import SeriesHome from '../components/imagehome/serieshome';

export default function Home() {

    const {item}=useFetch(`https://gateway.marvel.com:443/v1/public/comics?apikey=a0eea223f52bd9d0878a20201d11e9ed&hash=6cd1d1a1ad72998d58692ffbd4b8d5c0`,)
   
  
    const {eventHome}=useFetch(`https://gateway.marvel.com:443/v1/public/events?limit=7&apikey=a0eea223f52bd9d0878a20201d11e9ed&hash=6cd1d1a1ad72998d58692ffbd4b8d5c0`,)
    const {series}=useFetch(`https://gateway.marvel.com:443/v1/public/series?limit=5&apikey=a0eea223f52bd9d0878a20201d11e9ed&hash=6cd1d1a1ad72998d58692ffbd4b8d5c0`,)
    // const {stories}=useFetch(`https://gateway.marvel.com:443/v1/public/stories?apikey=a0eea223f52bd9d0878a20201d11e9ed&hash=6cd1d1a1ad72998d58692ffbd4b8d5c0`,)
console.log('eventssfds',eventHome)
  return (
        <div className="Home">
          
           <div className='textcomiccontainer'>
           <h2 className='texteventshome'>Comics</h2>
           </div>
         <div className='ImageHome'>
           {
            (!item)?<p>Loading</p>:<ImageHome  data={item}/>
           }
          
           </div> 
        
          
         <div className='contenteventseries'>
           {
            (!eventHome)?<p>Loading</p>:<EventHome data={eventHome}/>
           }
          
           </div>
           {
            (!series)?<p>Loading</p>:<SeriesHome data={series}/>
           }
        </div>
      );
}
