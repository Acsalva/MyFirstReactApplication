import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [clicksTimes, setClicksTimes] = useState(0);
  const [clicksAge, setClicksAge] = useState(0);
  const [clicksStamina, setClicksStamina] = useState(0);
  const [clicksStrenght, setClicksStrenght] = useState(0);
  const [clicksHeight, setClicksHeight] = useState(0);

  const MAX_STAT = 10;
  const MIN_STAT = 0;

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
          Hallo
        </a>
        <button onClick={() => { setClicksTimes(clicksTimes + 1) }}>Click here</button>
        <p>Times clicked: {clicksTimes}</p>

        <div className="stat-container">
          <button className="stat-btn" onClick={() => { setClicksAge(Math.max(clicksAge - 1, MIN_STAT)) }}>-</button>
          <p className="stat-txt">Age: {clicksAge} years old</p>
          <button className="stat-btn" onClick={() => { setClicksAge(clicksAge + 1) }}>+</button>
        </div>

        {/* DRY
        Do not
        Repeat
        Yourself 
         */}

        <div className="stat-container">
          <button className="stat-btn" onClick={() => { setClicksStrenght(Math.max(clicksStrenght - 1, MIN_STAT)) }}>-</button>
          <p className="stat-txt">Strenght: {clicksStrenght}</p>
          <button className="stat-btn" onClick={() => { setClicksStrenght(Math.min(clicksStrenght + 1, MAX_STAT)) }}>+</button>
        </div>

        <div className="stat-container">
          <button className="stat-btn" onClick={() => { setClicksStamina(Math.max(clicksStamina - 1, MIN_STAT)) }}>-</button>
          <p className="stat-txt">Stamina: {clicksStamina}</p>
          <button className="stat-btn" onClick={() => { setClicksStamina(Math.min(clicksStamina + 1, MAX_STAT)) }}>+</button>
        </div>

        <div className="stat-container">
          <button className="stat-btn" onClick={() => { setClicksHeight(Math.max(clicksHeight - 1, MIN_STAT)) }}>-</button>
          <p className="stat-txt">Height: {clicksHeight}cm</p>
          <button className="stat-btn" onClick={() => { setClicksHeight(clicksHeight + 1) }}>+</button>
        </div>
        {/* Make multiple variables to increase and decrease all the values.  */}
      </header>
    </div>
  );
}

export default App;
