import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [clicksTimes, setClicksTimes] = useState(0);
  const [clicksAge, setClicksAge] = useState(0);
  const [clicksStamina, setClicksStamina] = useState(0);
  const [clicksStrenght, setClicksStrenght] = useState(0);
  const [clicksHeight, setClicksHeight] = useState(0);
 
  return ( 
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello React - This is a test
        </a>
        <button onClick={()=>{setClicksTimes(clicksTimes + 1)}}>Click here</button>
  <p>Times clicked: {clicksTimes}</p>
  <button onClick={()=>{setClicksAge(clicksAge + 1)}}>+</button><button onClick={()=>{setClicksAge(clicksAge - 1)}}>-</button>
  <p>Age: {clicksAge} years old</p>
  <button onClick={()=>{setClicksStrenght(clicksStrenght + 1)}}>+</button><button onClick={()=>{setClicksStrenght(clicksStrenght - 1)}}>-</button>
  <p>Strenght: {clicksStrenght}</p>
  <button onClick={()=>{setClicksStamina(clicksStamina + 1)}}>+</button><button onClick={()=>{setClicksStamina(clicksStamina - 1)}}>-</button>
  <p>Stamina: {clicksStamina}</p>
  <button onClick={()=>{setClicksHeight(clicksHeight + 1)}}>+</button><button onClick={()=>{setClicksHeight(clicksHeight - 1)}}>-</button>
   <p>Height: {clicksHeight}cm</p>
  {/* Make multiple variables to increase and decrease all the values.  */}
      </header>
    </div>
  );
}

export default App;
