import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function SeriesImg({data}) {
  let navigate =useNavigate()
  return (
    <div>
      {(data)?(

        data.map((item)=>{
            return(
                <div key={item.id}onClick={()=>navigate(`/serie/${item.id}`)}>
                 <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`}alt=''/>
                <h2>{item.title}</h2>
                </div>
            )
        })
      ):''}
    </div>
  )
}