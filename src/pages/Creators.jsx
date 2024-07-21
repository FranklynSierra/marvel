import React from 'react'
import useFetch from '../useFetch'
import Image from '../components/Image'


export default function Creators() {
    const {item}=useFetch(`https://gateway.marvel.com:443/v1/public/creators?apikey=a0eea223f52bd9d0878a20201d11e9ed&hash=6cd1d1a1ad72998d58692ffbd4b8d5c0`,)
    
      return (
        <div className="App">
        
           {
            (!item)?<p>Not found</p>:<Image data={item}


            />
           }
        </div>
  )
}
