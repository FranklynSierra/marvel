import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function EventHome({data}) {
  let navigate =useNavigate()
  return (
        <div className='eventohomecontainer'>
        <h2 className='texteventshome'>Events</h2>
          {(data)?(
    
            data.map((item)=>{
                return(
                    <div key={item.id} onClick={()=>navigate(`/event/${item.id}`)} className='eventHome'>
                     <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`}alt=''/>
                     <div>
                     <h3>{item.modified}</h3>
                      <h2>{item.title}</h2>
                       <p>{item.description}</p> 
                      
                    </div>
                    </div>
                )
            })
          ):''}
        </div>
      )
}
