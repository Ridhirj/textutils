
import './App.css';
import TextForm from './components/TextForm';
import react, {useState} from 'react';
import Navbar from './components/Navbar';
{/*import About  from './components/About';*/}

{/*import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";*/}
function App() {

  const[mode,setMode]= useState('light');
  const toggleMode= ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor ='#6c757d';
      document.title='Textutils- dark mode';
    }
else{
  setMode('light');
  document.body.style.backgroundColor ='white';
  document.title='Textutils- white mode';
}
  }
  return (
   <>
   {/*<Navbar title='TextUtils' aboutText='About TextUtils'/>*/}
     {/*<Navbar/>*/}
  {/*<Router>*/}
<Navbar title = "textutilss"  mode={mode} toggleMode={toggleMode}/>
{/*<Routes>
    <Route  exact path="/about" element={<About />}/>*/}
    
          
    <TextForm heading="enter your content"  mode={mode} />
    
 {/*</Routes>  
 
        
<div className='container my-3'></div>
  //</Router>*/}


</>
  );
}

export default App;
