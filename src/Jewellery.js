import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function Shop23App(){
    const[Type,setType]=useState()
    const[Price,setPrice]=useState()
    const[name,setName]=useState([]);
function AddArray(){
    name.push({"Type":Type,"Price":Price});

    setName([...name])
}
    
    return(
        <div className="App">
<h1 style={{"color":"orange"}}>varieties of imported jewellery available only here buy now</h1>
Name:<input type="text" placeholder='enter jewellery type' onChange={(vart)=>setType(vart.target.value)}/><br></br>
price:<input type="text" placeholder='enter price' onChange={(varp)=>setPrice(varp.target.value)}/><br></br>
<button onClick={()=>AddArray()}>Add</button><br></br>
<br></br>
Array data:{JSON.stringify(name)}
        </div>
    );

}
export default Shop23App;