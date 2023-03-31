import React from 'react'
import { useState } from 'react';
import './quizstyle.css'


const QuizComp = () => {
    var Questionbank = [
        {
            Question: "What is the name of your Organization?",
            Answers: [
                { Answer: "Adobe", isCorrect: true },
                { Answer: "Microsoft", isCorrect: false },
                { Answer: "Google", isCorrect: false },
                { Answer: "TCS", isCorrect: false }
            ]
        },
        {
            Question: "What is the region of your Organization?",
            Answers: [
                { Answer: "Asia", isCorrect: false },
                { Answer: "Africa", isCorrect: true },
                { Answer: "Europe", isCorrect: false },
                { Answer: "Australia", isCorrect: false }
            ]
        }, {
            Question: "2 +3 = ?",
            Answers: [
                { Answer: "5", isCorrect: true },
                { Answer: "7", isCorrect: false },
                { Answer: "4", isCorrect: false },
                { Answer: "3", isCorrect: false }
            ]
        },
        {
            Question: "What comes after january?",
            Answers: [
                { Answer: "feb", isCorrect: true },
                { Answer: "march", isCorrect: false },
                { Answer: "june", isCorrect: false },
                { Answer: "sept", isCorrect: false }
            ]
        },
        {
            Question: "What kind of organisation is yours?",
            Answers: [
                { Answer: "Consulting", isCorrect: false },
                { Answer: "Development", isCorrect: false },
                { Answer: "Service Prov", isCorrect: true },
                { Answer: "Product Based", isCorrect: false }
            ]
        }
    ]

    //useState Hook
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

const handleAnswerResponse=(isCorrect)=>
{
    if(isCorrect)
    {
        setScore(score+1);
    }

   const nextQuestion= currentQuestion+1;
   if(nextQuestion<Questionbank.length)
   {
    setCurrentQuestion(nextQuestion);
   }
   else{
    setShowScore(true);
   }
}

const resetQuiz=()=>
{
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
}

    return (
        
        <div className='app'>
            <div className="background-image">
                <img src="bg.png" />
            </div>
            {showScore ? (
                <div className='score-section'>
                    You have scored {score} out of {Questionbank.length}
                    <>
                       <button type="submit" onClick={resetQuiz}>Play Again!!</button>
                    </>
                </div>
            )
                : (
                    <>
                        <div className='question-section'>
                            <div className='question-count'>
                               <span>{currentQuestion+1}</span>/{Questionbank.length}
                            </div>

                            <div className='question-text'>
                             {Questionbank[currentQuestion].Question}
                            </div>
                        </div>

                        <div className='answer-section'>
                          {Questionbank[currentQuestion].Answers.map((answer)=>
                          (
                              <button onClick={()=>handleAnswerResponse(answer.isCorrect)}>{answer.Answer}</button>
                          ))}
                        </div>
                    </>
                )
            }

        </div>

        
    );
}

export default QuizComp;