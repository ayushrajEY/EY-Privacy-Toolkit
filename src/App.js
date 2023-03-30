import React, { useState } from 'react';
import './App.css';

function App() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="container">
      <div className="logo">
        <img src="logo.png" alt="React Logo" className="logo" />
      </div>
      <div className={`paper ${isFlipped ? 'flipped' : ''}`} align = "center">
        <h1>WELCOME !</h1>
        <br></br>
        <p>The Questionaire will take 10 minutes to complete</p>
        <br></br>
        <h4>Click on the button to Continue</h4>
      </div>
      <button className="rounded" onClick={handleFlip}>Continue</button>
    </div>
  );
}

export default App;
