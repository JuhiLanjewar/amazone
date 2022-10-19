import logo from './logo.svg';
import './App.css';
import{BrowserRouter,Outlet,Route,Router,Routes,Link} from 'react-router-dom'
function HeaderApp(){
    return(
        <div className="App">
<h1 style={{"color":"blue"}}><i><u>welcome to flipkart</u></i></h1>
<Link to="linkc">clothes</Link><br></br>
<Link to="links">shoes</Link><br></br>
<Link to="linkj">jewellery</Link><br></br>
<Link to="linke">electronics</Link><br></br>

<Outlet/>
        </div>
    );

}
export default HeaderApp;