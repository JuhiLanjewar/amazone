import logo from './logo.svg';
import './App.css';
import {useState} from 'react';


function Practice2App() {
    const[color1, setColor1]=useState("Pink")
    
    
  
  return (
    <div className="App">
      <h1>This is Practice 2</h1>

      <input type="text" placeholder='enter color'
      onChange={(text_box_ki_value_pakad)=>setColor1(text_box_ki_value_pakad.target.value)}/>

     <h2 style= {{"color":color1}}>Welcome to Dashera</h2>
      
    </div>
  );
}

export default Practice2App;
