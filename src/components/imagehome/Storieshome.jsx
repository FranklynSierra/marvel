import React from 'react'

export default function StoriesHome({data}) {
    return (
        <div className=''>
          {(data)?(
    
            data.map((item,key)=>{
                return(
                    <div key={key}className=''>
                     <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`}alt=''/>
                      <h2>{item.title}</h2>
                    </div>
                )
            })
          ):''}
        </div>
      )
}

