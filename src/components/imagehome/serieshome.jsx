import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function SeriesHome({data}) {
  let navigate=useNavigate()  
  return (
        <div className='seriescont'>
       <div className='textseriescontainer'>
        <h2 className='textseries'>series</h2>
        </div>
          {(data)?(
    
            data.map((item)=>{
                return(
                  
                    <div key={item.id}onClick={()=>navigate(`/serie/${item.id}`)}className='serieshome'>
                     <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`}alt=''/>
                      <h2>{item.title}</h2>
                    </div>
                )
            })
          ):''}
        </div>
      )
}
