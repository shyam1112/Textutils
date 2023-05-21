import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextFrom from './Components/TextFrom';
import About from './Components/About';
import { useState } from 'react';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";  

  function App() {
    const [mode,setmode]=useState('light'); 

    const togglee=()=>{
      if(mode === 'light'){
        setmode('dark');
        document.body.style.backgroundColor='black';
        document.body.style.color='light';
        showalert('Dark mode is enable','success');
      }else{
        setmode('light');
        document.body.style.backgroundColor='white';
        document.body.style.color='dark';
        showalert('Light mode is enable','success');

      }
    }

    const [alert,setAlert]=useState(null);

    const showalert = (msg,type)=>{
      setAlert({
        msg:msg,
        type:type,
      })
      setTimeout(() => {
          setAlert(null);
        }, 1500);
   
    }

  return (
  <>
  <Router>
  <Navbar title='Radhe' disable='Surat' mode={mode} togglee={togglee} />
  <Alert alert={alert}/>
  
  <Switch>
    <div className='container my-3'>
          <Route path="/about">
            <About />
          </Route>

          <Route path="/">
          <TextFrom  showalert={showalert} heading="Enter the text " mode={mode} />
          </Route>
  </div>
        </Switch>
        </Router>
  </>
  );
}

export default App;
