import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
function Shop45App(){
    const[Set1,setSet1]=useState()
    const[Set2,setSet2]=useState()
    function aces()
    {
        console.log(Set1)
        console.log(Set2)
    }
    return(
        <div className="App">
<h1 style={{"color":"purple"}}>varieties of electronics items available only here buy now</h1>
<select onChange={(acc1)=>setSet1(acc1.target.value)}>
    <option>Headphones</option>
    <option>LED</option>
    <option>Laptops</option>
    <option>Mobile</option>
    <option>Refrigerator</option>
    <option>Washing machine</option>
</select>
<select onChange={(price)=>setSet2(price.target.value)}>
<option>500-1000</option>
    <option>1000-3000</option>
    <option>4000-8000</option>
    <option>9000-12000</option>
    <option>13000-17000</option>
    <option>19000-25000</option>
</select>
<input type="button" value="buy now" onClick={()=>aces()}/>
        </div>
    );

}
export default Shop45App;