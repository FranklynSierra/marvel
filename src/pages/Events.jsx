import React, { useRef } from 'react'
import useFetch from '../useFetch'


import EventHome from '../components/imagehome/Eventhome'
import axios from 'axios'

export default function Events() {
    const {item,setitem}=useFetch(`https://gateway.marvel.com:443/v1/public/events?apikey=a0eea223f52bd9d0878a20201d11e9ed&hash=6cd1d1a1ad72998d58692ffbd4b8d5c0`,)
    const searchImput = useRef(null)
  const fetchImages=async()=>{
    try {
      const {data }= await axios.get(`https://gateway.marvel.com:443/v1/public/events?modifiedSince=${searchImput.current.value}&apikey=a0eea223f52bd9d0878a20201d11e9ed&hash=6cd1d1a1ad72998d58692ffbd4b8d5c0` );
      console.log('data:',data.data)
      setitem(data.data.results)
    
     
    } catch (error) {
      console.log(error)
    }
   }
   const resetSearch=()=>{
   
    fetchImages()
  
   }
   const handleSearch = (e) => {
    e.preventDefault();
    resetSearch()
   
  
  }
 
      return (
        <div className="App">
        
        <form className="search" onSubmit={handleSearch}>
   
    
   <input
     className='inputdate'
     type="date"
     placeholder="Search Anything..."
     
     // value={img}
     // onChange={(e) => setImg(e.target.value)}
     ref={searchImput}
   />

<input className='inputsubmit' type="submit" value="Submit"/>


 
 </form>
           {
            (!item)?<p>Not found</p>:<EventHome data={item}/>
           }
        </div>
  )
}
