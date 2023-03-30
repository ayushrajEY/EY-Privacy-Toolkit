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
            <h1>WELCOME !</h1>
            <br />
            <p>The Questionaire will take 10 minutes to complete</p>
            <br />
            <h4>Click on the button to Continue</h4>
          </div>
          <div className="background-image"></div>
          <button className="rounded small-button" onClick={handleFlip}>Continue</button>
        </>
      )}
    </div>
  );
}

export default App;
