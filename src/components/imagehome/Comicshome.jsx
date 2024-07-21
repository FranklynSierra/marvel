import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ComicsHome({data}) {
  let navigate =useNavigate()
  return (
    <div className='comics'>
      {(data)?(

        data.map((item)=>{
            return(
                <div key={item.id}onClick={()=>navigate(`/comics/${item.id}`)}>
                 
                 <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`}alt=''/>
                <h2>{item.title}</h2>
                </div>
            )
        })
      ):''}
    </div>
  )
}
