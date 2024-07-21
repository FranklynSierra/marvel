import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


export default function Individual() {
  const {id}=useParams()
  const [item, setitem] = useState();
  const fetch=async()=>{
    const res=await axios.get(`https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=a0eea223f52bd9d0878a20201d11e9ed&hash=6cd1d1a1ad72998d58692ffbd4b8d5c0`)
  setitem(res.data.data.results[0])  
  console.log(res)
} 
useEffect(() => {
  fetch()

}, []);

  return (
    <div className='ind'>
   
   {  (!item)?"":(
       <div className='characterind'>
       <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`}alt=''/>
     <div>
       <h2>{item.name}</h2>
       <h2>{item.description}</h2>
       </div>
       </div>
     )  }
     
       </div>
  )
}
