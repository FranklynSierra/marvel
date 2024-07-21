
import React, { useState } from 'react'
import appFirebase from '../credentials';
import { signInWithPopup,GoogleAuthProvider,getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
const auth=getAuth(appFirebase)

const provider=new GoogleAuthProvider()
export default function Login() {
  const navigate = useNavigate()
const [value, setvalue] = useState('');
    const [registering, setRegistering] = useState(false);
    const functAuth=async(e)=>{
       e.preventDefault();
       const correo=e.target.email.value;
       const contraseña=e.target.password.value
       
      if(registering){
        try{
            await createUserWithEmailAndPassword(auth,correo,contraseña)
            navigate('/');
          }catch(err){
          console.log(err)
          
        alert('the email is already in use')
        }
      }else{
        try{
        await signInWithEmailAndPassword(auth,correo,contraseña)
        navigate('/');
      }catch(err){
          console.log(err)
            alert('the email or password have errors')
        }
       
      }
    }
const handleClick=()=>{
  signInWithPopup(auth,provider).then((data)=>{
   
    setvalue(data.user.email)
    navigate('/');
    
  })
}
  return (
    <div className='loginContainer'>
      
      <img src='data:image/jpeg;base64,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'alt='logo'/>
        <form onSubmit={functAuth} className='loginform'>
            <input id='email' type='text'placeholder='Email...'className='inputsubmit'/>
            <input id='password' type='password'placeholder='Password...'className='inputsubmit'/>
         <div>
            <button   className='logInRes'>{registering?'Register':'Log In'}</button>
            </div>
        </form>
    <div className='question'>
      <h4 className='accountquestion'>{registering?'if you already have an account?':'You do not have an account?'}<button  className='register' onClick={()=>setRegistering(!registering)}><span>{registering?'Log In':'Register'}</span></button></h4> 
      </div>
     <button className='google' onClick={handleClick}>
     
  
    <div>
       <ion-icon className='icon'name="logo-google"></ion-icon>
       
     <span className='spanGoogle'>Sigin with Google</span>
    
     </div>
     </button>
     
    </div>
  )
}












// import React, { useEffect, useState } from 'react'
// import appFirebase from '../credentials';
// import { signInWithPopup,GoogleAuthProvider,getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword } from 'firebase/auth';
// import { useNavigate,useLocation } from 'react-router-dom';
//  import { useAuthState } from 'react-firebase-hooks/auth';
// const auth=getAuth(appFirebase)

// const provider=new GoogleAuthProvider()
// export default function Login() {
//   const [value, setvalue] = useState('')
// const handleClick=()=>{
//   signInWithPopup(auth,provider).then((data)=>{
   
//     setvalue(data.user.email)
//   })
// }
//   return (
//     <div className='loginContainer'>
      
//       <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAUVBMVEUAAAD///9TU1NNTU2GhoZCQkLZ2dn6+vorKytpaWnQ0NAgICCioqLBwcH8/Pzb29t5eXkODg6pqalycnKYmJgXFxfExMQoKCgaGhpDQ0M4ODiZZhZaAAACkklEQVR4nO3dgXKiMBhF4cRdGiAE0da29v0fdLFURF06Zprsn2TP9wDOPTOYOlQHpW+Zthsqu1O52dlq6Fpz16Nu8lwjvfSHGme+Kez3tfTAAOquXyt0VnpcIAf310KT+/W51Jj7wm0JF+jF2/a2sJWeFFx7XVhe4Jw4FW6l10SxvRSaN+kxUdRmLizpFF1qzoVOekk0birs36WHRGP7z8JOekdE+1OhKetP/bXxsFEFvwtP3FhY6kE6abQy0hsiM6rEz2tLrSr5JD3p1CA9IbJBVdITIqtUKXcu1liV321DP6X3AQAAAAAAAPk7/vKT353p+TtJD8rvCy9PnoVP0oO9UUhh+iikMH0UUpg+CilMH4UUpo9CCtNHIYXpo5DC9FFIYfoopDB9FFKYvvL/y/3828+z9GAAAAAAAADgn9o8fHfw6PnKx4dfeROl7OzxQt/fMVUUUhgIhRSuo5DCUCikcB2FFIZCIYXrKKQwFAopXEchhaFQSOE6CikMhUIK11FIYSgUXnx4vvJHdoUvnr+ZecmuMB4KKaRQHoUUUiiPQgoplEchhRTKo5BCCuVRSCGF8iikkEJ5FFJIoTwKKfzfCw8bz8eLhrc5RC0EAAAAAAAAsGYnPSCynbLSEyKzyvd3grmp1CA9IbJBddITIutUKz0hslYZ6QmRGaUb6Q1RNVppJz0iKjcWmlp6RUS1GQv1XnpGRHt9KuzfpXdEY/vPwoLfiU5PhcUep40+FxZ62IzHzLkwwwe5PmJ6nO1UqEv87NbqZWGBiV+Bc6HelvVerOcnLs+F2pR0ojZG3xdq/VrKHQ3rFlXLQt3vS7hU667Xa4Xjpfqa+7XaOHOddFN4imy7obL53WTc2WroWnPX8wcN+zaFTWwciAAAAABJRU5ErkJggg=='alt='logo'/>
       
   
  
//      <button className='inputsubmit google' onClick={handleClick}>
     
//     <div>

//        <ion-icon className='icon'name="logo-google"></ion-icon>
       
//      <span className='spanGoogle'>Sigin with Google</span>
    
//      </div>
//      </button>
     
//     </div>
//   )
// }








// import React, { useEffect, useState } from 'react'
// import appFirebase from '../credentials';
// import {signInWithEmailLink, sendSignInLinkToEmail, signInWithPopup, GoogleAuthProvider, getAuth, createUserWithEmailAndPassword, isSignInWithEmailLink} from 'firebase/auth';
// import { useNavigate,useLocation } from 'react-router-dom';
// import { useAuthState } from 'react-firebase-hooks/auth';
// const auth = getAuth(appFirebase)
// const provider = new GoogleAuthProvider()
// export default function Login() {
//   const navigate = useNavigate()
//   const location = useLocation();
//   const {search} = location;
//   const [user] = useAuthState(auth);
//   const [value, setvalue] = useState('');
//   const [loading, setloading] = useState();
//   const [error, setError] = useState();
//   const [message, setMessage] = useState();
//   const [registering, setRegistering] = useState(false);
//   const functAuth = async (e) => {
//     e.preventDefault();
//     const correo = e.target.email.value;
//     const contraseña = e.target.password.value
//     setloading(true)
//     if (registering) {
//       try {

//         await createUserWithEmailAndPassword(auth, correo, contraseña)
       
//       } catch (err) {

//         alert('the email is already in use')
//       }
//     } else {
//       try {
//         sendSignInLinkToEmail(auth, correo, {
//           url: 'http://localhost:3000/',
//           handleCodeInApp: true,
//         }).then(() => {
//           localStorage.setItem('email', correo)
//           setloading(false)
//           setError('')
          
//         }).catch(err => {
//           setloading(false)
//           setError(err.message)
//           setMessage('We Sent you an Email with a link to sing in')
      
//         })
//       } catch (err) {
//         console.log(err)
//         alert('the email or password have errors')
//       }

//     }
//   }
//   const handleClick = () => {
//     signInWithPopup(auth, provider).then((data) => {

//       setvalue(data.user.email)
//     })
//   }

//   useEffect(()=>{
//     if(user){
//       // user is already signed in
//       navigate('/');
//     }
//     else{
//       // user is not signed in but the link is valid
//       if(isSignInWithEmailLink(auth, window.location.href)){
//         // now in case user clicks the email link on a different device, we will ask for email confirmation
//         let email = localStorage.getItem('email');
//         if(!email){
//           email = window.prompt('Please provide your email');
//         }
//         // after that we will complete the login process
//         setloading(true);
//         signInWithEmailLink(auth, localStorage.getItem('email'), window.location.href)
//         .then((result)=>{
//           // we can get the user from result.user but no need in this case
//           console.log(result.user);
//           localStorage.removeItem('email');
//           setloading(false);
//           setError('');
//           navigate('/home');
//         }).catch((err)=>{
//           setloading(false);
//           setError(err.message);
//           navigate('/login');
//         })
//       }
//       else{
//         console.log('enter email and sign in');
//       }
//     }
//   },[user, search, navigate]);
//   return (
//     <div className='loginContainer'>

//       <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAUVBMVEUAAAD///9TU1NNTU2GhoZCQkLZ2dn6+vorKytpaWnQ0NAgICCioqLBwcH8/Pzb29t5eXkODg6pqalycnKYmJgXFxfExMQoKCgaGhpDQ0M4ODiZZhZaAAACkklEQVR4nO3dgXKiMBhF4cRdGiAE0da29v0fdLFURF06Zprsn2TP9wDOPTOYOlQHpW+Zthsqu1O52dlq6Fpz16Nu8lwjvfSHGme+Kez3tfTAAOquXyt0VnpcIAf310KT+/W51Jj7wm0JF+jF2/a2sJWeFFx7XVhe4Jw4FW6l10SxvRSaN+kxUdRmLizpFF1qzoVOekk0birs36WHRGP7z8JOekdE+1OhKetP/bXxsFEFvwtP3FhY6kE6abQy0hsiM6rEz2tLrSr5JD3p1CA9IbJBVdITIqtUKXcu1liV321DP6X3AQAAAAAAAPk7/vKT353p+TtJD8rvCy9PnoVP0oO9UUhh+iikMH0UUpg+CilMH4UUpo9CCtNHIYXpo5DC9FFIYfoopDB9FFKYvvL/y/3828+z9GAAAAAAAADgn9o8fHfw6PnKx4dfeROl7OzxQt/fMVUUUhgIhRSuo5DCUCikcB2FFIZCIYXrKKQwFAopXEchhaFQSOE6CikMhUIK11FIYSgUXnx4vvJHdoUvnr+ZecmuMB4KKaRQHoUUUiiPQgoplEchhRTKo5BCCuVRSCGF8iikkEJ5FFJIoTwKKfzfCw8bz8eLhrc5RC0EAAAAAAAAsGYnPSCynbLSEyKzyvd3grmp1CA9IbJBddITIutUKz0hslYZ6QmRGaUb6Q1RNVppJz0iKjcWmlp6RUS1GQv1XnpGRHt9KuzfpXdEY/vPwoLfiU5PhcUep40+FxZ62IzHzLkwwwe5PmJ6nO1UqEv87NbqZWGBiV+Bc6HelvVerOcnLs+F2pR0ojZG3xdq/VrKHQ3rFlXLQt3vS7hU667Xa4Xjpfqa+7XaOHOddFN4imy7obL53WTc2WroWnPX8wcN+zaFTWwciAAAAABJRU5ErkJggg==' alt='logo' />
//       <form onSubmit={functAuth} className='loginform'>
//         <input id='email' type='text' placeholder='Email...' className='inputsearch' />
//         <input id='password' type='password' placeholder='Password...' className='inputsearch' />
//         <div>
//           <button className='logInRes'>
        
          
          
//           {registering ? 'Register' : setloading?(
//         <span>Loggin you in</span>
//       ):(
//         <span>Login</span>
//       )}</button>
//         </div>
//       </form>
//       <div className='question'>
//         <h4 className='accountquestion'>{registering ? 'if you already have an account?' : 'You do not have an account?'}<button className='inputsubmit register' onClick={() => setRegistering(!registering)}><span>{registering ? 'Log In' : 'Register'}</span></button></h4>
//       </div>
     
   
//       {error!==''&&(
//         <div>{error}</div>
//       )}
//       {message!==''&&(
//         <div>{message}</div>
//       )}

    
//       <button className='inputsubmit google' onClick={handleClick}>


//         <div>
//           <ion-icon className='icon' name="logo-google"></ion-icon>

//           <span className='spanGoogle'>Sigin with Google</span>

//         </div>
//       </button>

//     </div>
//   )
// }