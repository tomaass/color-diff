import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [firstColor, setFirstColor] = useState('#FF6F61');
  const [secondColor, setSecondColor] = useState('#D69C2F');

  return (
    <div className="App">
      <header className="App-header">
        <div className="Input">
          <input
            style={{ backgroundColor: firstColor }}
            onChange={({ target: { value } }) => setFirstColor(value)}
            value={firstColor}
          />
        </div>
        <div className="Input">
          <input
            style={{ backgroundColor: secondColor }}
            onChange={({ target: { value } }) => setSecondColor(value)}
            value={secondColor}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
