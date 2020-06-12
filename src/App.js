import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button';
import StatSlider from './StatSlider';

function App() {
  const [clicksTimes, setClicksTimes] = useState(0);
 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Button onClick={() =>  setClicksTimes(clicksTimes + 1)}>Click me :)</Button>
        </p>

        <p>Times clicked: {clicksTimes}</p>

        <StatSlider statName="Intelligence" />
        <StatSlider statName="Age" maxValue={5} />
        <StatSlider statName="Strength" />
        <StatSlider statName="Stamina" />
        <StatSlider statName="Height" maxValue={20} />

        {/* Make multiple variables to increase and decrease all the values.  */}
      </header>
    </div>
  );
}

export default App;
