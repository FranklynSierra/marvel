import axios from 'axios';
import { useState ,useEffect} from 'react'

export default function useFetch(ur) {
    const [url, seturl] = useState(ur);
    const [item, setitem] = useState();
    const [homeCreators, sethomeCreators] = useState();
    const [eventHome, seteventHome] = useState();
    const [stories, setStories] = useState();
  const [series, setseries] = useState();
    useEffect(() => {
      const fetch=async()=>{
        const res=await axios.get(url)
        setitem(res.data.data.results)
        sethomeCreators(res.data.data.results)
      seteventHome(res.data.data.results)
      setseries(res.data.data.results)
      setStories(res.data.data.results)
    }
      fetch()
  
    }, [url]);
    return {setitem,item,url,homeCreators,eventHome,series,stories}
}