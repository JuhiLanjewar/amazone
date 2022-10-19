
import './App.css';
import{BrowserRouter,Route,Router,Routes} from 'react-router-dom'
import HeaderApp from './header';
import Shop1App from './Shoes';
import Shop23App from './Jewellery';
import Shop45App from './Accesories';
import ShopApp from './Clothes';



function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HeaderApp/>}>
        <Route path='/linkc' element={<ShopApp/>}></Route>
        <Route path='/links' element={<Shop1App/>}></Route>
        <Route path='/linkj' element={<Shop23App/>}></Route>
        <Route path='/linke' element={<Shop45App/>}></Route>
        </Route>
      </Routes>
      </BrowserRouter>
  
      
      </div>
  );
}

export default App;
