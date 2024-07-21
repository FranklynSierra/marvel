import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function IndEvent() {
  const {id}=useParams()
  const [item, setitem] = useState();
  const fetch=async()=>{
    const res=await axios.get(`https://gateway.marvel.com:443/v1/public/events/${id}?apikey=a0eea223f52bd9d0878a20201d11e9ed&hash=6cd1d1a1ad72998d58692ffbd4b8d5c0`)
  setitem(res.data.data.results[0])  
} 
useEffect(() => {
  fetch()
 
}, []);
  return (
    <div>
   
   {  (!item)?"":(
       <div className='characterind'>
       <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`}alt=''/>
                     <div >
                     <h2>{item.modified}</h2>
                      <h2>{item.title}</h2>
                       <h2>{item.description}</h2> 
                      
                    </div>
       </div>
     )  }
     
       </div>
  )
}
