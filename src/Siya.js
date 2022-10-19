import logo from './logo.svg';
import './App.css';
import Practice1App from './Practice1';
import Practice2App from './Practice2';

function SiyaApp() {
  function gendercheck(varGender){

    console.log(varGender.target.valuewebnet
      )
  }
  
  return (
    <div className="App">
      <h1 style={{"color" :"red"}}>Webnet Computers</h1>
      Male<input type="radio" value="male" name="gender" onChange={gendercheck}/>
      female<input type="radio" value="female" name="gender" onChange={gendercheck}/>
   
    
    </div>
  );
}

export default SiyaApp;
