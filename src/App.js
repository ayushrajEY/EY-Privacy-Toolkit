import React, { useState } from 'react';
import './App.css';
import QuizComp from './QuestionComponent/QuizComp';

function App() {

  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(true);
  };

  return (
    <div className="container">
      {isFlipped ? (
        <QuizComp />
      ) : (
        <>
          <div className="background-image">
            <img src="bg.png" />
          </div>
          <div className="logo">
            <img src="logo.png" alt="React Logo" className="logo" />
          </div>
          <div className={`paper ${isFlipped ? 'flipped' : ''}`} align="center">
            <h1 style={{ color: 'black' }}>WELCOME !</h1>
            <br />
            <p style={{ color: 'black' }}>The Questionaire will take 10 minutes to complete</p>
            <br />
            <h4 style={{ color: 'black' }}>Click on the button to Continue</h4>
            <br />
          </div>
          <button className="rounded small-button" onClick={handleFlip}>Continue</button>
        </>
      )}
    </div>
  );
}

export default App;
