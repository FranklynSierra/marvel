import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Image({data}) {
  let navigate =useNavigate()
  return (
    <div className='characters '>
      {(data)?(
    
    data.map((item)=>{
        return(
            <div onClick={()=>navigate(`/character/${item.id}`)} key={item.id}className='image'>
             <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`}alt=''/>
              <h2>{item.name}</h2>
           
            </div>
        )
    })
  ):''}
    </div>
  )
}
