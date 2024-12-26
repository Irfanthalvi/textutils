import logo from './logo.svg';
import './App.css';
// import TextUtils from './Components/TextUtils';
import TextForm from './Components/TextForm';
import { useState } from 'react';

function App() {
  const [mode, setmode] = useState('dark')
  let togglemode = () => {
    // if (togglemode ==="light"){
    //   setmode('dark');
    document.body.style.backgroundColor = 'grey';
    // }
    // else{
    //   setmode('light')
    //   document.body.style.backgroundColor = 'white';
    // }
  }


  return (


    // mode={mode}togglemode={togglemode}
    <TextForm />
  );
}

export default App;
