import logo from './logo.svg';
import './App.css';
import {useState} from 'react';


function Practice1App() {
    const[name, setName]=useState()
    const[num2, setNum2]=useState()

    function formSubmit(){
        console.log(name,num2)
        console.log(name+num2)
        console.log("sum",parseInt(name)+parseInt(num2))
    }
  
  return (
    <div className="App">
      <h1>This is Practice 1</h1>

      <input type="text" placeholder='enter first no'
      onChange={(vaeText)=>setName(vaeText.target.value)}/>

      <input type="text" placeholder='enter second no'
      onChange={(vaeText)=>setNum2(vaeText.target.value)}/>

      <input type="button" value="Register" onClick={()=>formSubmit()}/>

    </div>
  );
}

export default Practice1App;
