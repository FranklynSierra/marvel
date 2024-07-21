import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ImageHome({data}) {
  let navigate =useNavigate()
  return (
        <div className='ImageHome'>
         
          {(data)?(
    
            data.map((item)=>{
                return(
                    <div onClick={()=>navigate(`/comics/${item.id}`)} key={item.id}className='image'>
                     <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`}alt=''/>
                      <h2>{item.title}</h2>
                   
                    </div>
                )
            })
          ):''}
        </div>
      )
}
