
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Comic from './pages/Comic';
import Login from './pages/Login';
import Home from './pages/Home';
import Characters from './pages/Characters';
import Events from './pages/Events';
import './App.css'
// import Stories from './pages/Stories';
import Series from './pages/Series';
import Individual from './components/Individual';
import IndEvent from './components/individual/indevents';
import IndComic from './components/individual/intcomics';
import IndSeries from './components/individual/indseries';
import { getAuth,onAuthStateChanged } from 'firebase/auth';
import appFirebase from './credentials';
import { useState } from 'react';
import TopBar from './components/TopBar';
const auth=getAuth(appFirebase)

function App() {

 
 
  
   const [user, setUser] = useState('');
   onAuthStateChanged(auth,(userFirebase)=>{
    if(userFirebase){
      setUser(userFirebase)
    }else{
      setUser('')
    }
   })
  
  return (
   <BrowserRouter>
   <TopBar correousuario={user.email}/>
      <Routes>
       <Route path='/'element={<Home></Home>}/>
       <Route path='/login'element={<Login/>}/>
       <Route path='/comic'element={<Comic/>}/>
       <Route path='/characters'element={<Characters/>}/>
       <Route path='/events'element={<Events/>}/>
       {/* <Route path='/stories'element={<Stories/>}/> */}
       <Route path='/series'element={<Series/>}/>
       <Route path='/character/:id'element={<Individual/>}/>
       <Route path='/comics/:id'element={<IndComic/>}/>
       <Route path='/event/:id'element={<IndEvent/>}/>
       <Route path='/serie/:id'element={<IndSeries/>}/>
       
      </Routes>
   </BrowserRouter>
  );
}

export default App;
