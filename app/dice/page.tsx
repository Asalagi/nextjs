'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import diceOne from './dice-1.png';
import diceTwo from './dice-2.png';
import diceThree from './dice-3.png';
import diceFour from './dice-4.png';
import diceFive from './dice-5.png';
import diceSix from './dice-6.png';
import './styling.css';


function DiceGame() {
    const [currentDice, setCurrentDice] = useState(0);
    const [diceStart, setDiceStart] = useState(false);
    const [currentScore, setCurrentScore] = useState([0, 0]);
    const [totalScore, setTotalScore] = useState([0, 0]);
    const [activePlayer, setActivePlayer] = useState(0);

    const diceImages = [diceOne, diceTwo, diceThree, diceFour, diceFive, diceSix];
  

    const switchPlayer = () => {
        // setCurrentDice(currentDice);
        setActivePlayer(activePlayer === 0 ? 1 : 0);
    };

    const roll = () => {
      const diceValue = Math.trunc(Math.random() * 6) + 1;
      setCurrentDice(diceValue);
      setDiceStart(true);
  
      if (diceValue !== 1) {
        setCurrentScore((prevScores) => {
            const newScores = [...prevScores];
            newScores[activePlayer] += diceValue;
            return newScores;
        });
        } else {
            setCurrentScore((prevScores) => {
                const newScores = [...prevScores];
                newScores[activePlayer] = 0;
                return newScores;
            });
            switchPlayer();
        }
    };

    const newGame = () => {
        setDiceStart(false);
        setCurrentDice(0);
        setCurrentScore([0, 0]);
        setTotalScore([0, 0]);
        setActivePlayer(0);
    };

    const hold = () => {
        const newTotalScores = [...totalScore];
        newTotalScores[activePlayer] += currentScore[activePlayer];
        setTotalScore(newTotalScores);
      
        setCurrentScore((prevScores) => {
          const newScores = [...prevScores];
          newScores[activePlayer] = 0;
          return newScores;
        });
      
        setCurrentDice(currentDice);
        switchPlayer();
      };

    return (
        <div>
          <div className="main">
            <div className={`player ${activePlayer ? '' : 'player-active'}`}>
                <h2 className="name" id="name--0">Player 1</h2>
                <p className="score" id="score--0">{totalScore[0]}</p>
                <div className="current">
                    <p className="current-label">Current</p>
                    <p className="current-score" id="current--0">{activePlayer === 0 ? currentScore[0] : 0}</p>
                </div>
            </div>
            <div className={`player ${activePlayer ? 'player-active' : ''}`}>
                <h2 className="name" id="name--1">Player 2</h2>
                <p className="score" id="score--1">{totalScore[1]}</p>
                <div className="current">
                    <p className="current-label">Current</p>
                    <p className="current-score" id="current--1">{activePlayer === 1 ? currentScore[1] : 0}</p>
                </div>
            </div>

            {diceStart && (
                <Image
                    src={diceImages[currentDice - 1]}
                    className="dice"
                    alt="dice"
                />
            )};
            <button className="btn btn--new" onClick={newGame}>New Game</button>
            <button className="btn btn--roll" onClick={roll}>Roll Dice</button>
            <button className="btn btn--hold" onClick={hold}>Hold</button>
           </div>
        </div>
    );
};

export default DiceGame;