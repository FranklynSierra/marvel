import React from 'react'
import marvel from '../images/marvel-logo-tumblr-24.png'
import { Link } from "react-router-dom";
import { getAuth,signOut } from 'firebase/auth';
import appFirebase from '../credentials';
export default function TopBar({correousuario}) {
  const auth=getAuth(appFirebase)
    
  return (
    <div>
   
    <div className='topcontainer'>
    <div className='topbarcontainer'>
    {(correousuario)?(<>
      <h2  className='linktopbar'>{correousuario}</h2>
      <button><Link className='linktopbar' onClick={()=>signOut(auth)}>Logout</Link></button>
      </>
    ):( <button><Link className='linktopbar' to='/login'>Login</Link></button>)}
   
    </div>
    <div>
   
      <img src={marvel}alt='logo'/>
      
      </div>
      <div></div>
    </div>
    <div className='topbarcontainer'>
     <button><Link className='linktopbar' to='/'>Home</Link></button>
      <button><Link className='linktopbar' to='/comic'>Comics</Link></button>
      <button><Link  className='linktopbar' to='/characters'>Characters</Link></button>
      {/* <button><Link to='/stories'>Stories</Link></button> */}
      <button><Link className='linktopbar' to='/events'>Events</Link></button>
      <button><Link className='linktopbar' to='/series'>Series</Link></button>
     
   
    </div>
    </div>
  )
}
