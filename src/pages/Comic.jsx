import React,{useRef} from 'react'
import useFetch from '../useFetch';



import ComicsHome from '../components/imagehome/Comicshome';
import axios from 'axios';
export default function Comic() {

  const {item,setitem}=useFetch(`https://gateway.marvel.com/v1/public/comics?ts=1&apikey=a0eea223f52bd9d0878a20201d11e9ed&hash=6cd1d1a1ad72998d58692ffbd4b8d5c0`,)
  // http://gateway.marvel.com/v1/public/comics?titleStartsWith=s
  const searchImput = useRef(null)
 
  const fetchImages=async()=>{
    try {
      const {data }= await axios.get(`http://gateway.marvel.com/v1/public/comics?titleStartsWith=${searchImput.current.value}&apikey=a0eea223f52bd9d0878a20201d11e9ed&hash=6cd1d1a1ad72998d58692ffbd4b8d5c0` );
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
        className='inputsearch'
        type="text"
        placeholder="Search Comics..."
        // value={img}
        // onChange={(e) => setImg(e.target.value)}
        ref={searchImput}
      />

<input className='inputsubmit' type="submit" value="Submit"/>

   
    
    </form>
    <h2 className='texteventshome'>Comics</h2>
         {
          (!item)?<p>Not found</p>:<ComicsHome data={item}/>
         }
      </div>
    );

}
