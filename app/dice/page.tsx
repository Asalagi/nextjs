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
    const [winnerPlayer0, setWinnerPlayer0] = useState(false);
    const [winnerPlayer1, setWinnerPlayer1] = useState(false);
    const [currentScore, setCurrentScore] = useState([0, 0]);
    const [totalScore, setTotalScore] = useState([0, 0]);
    const [activePlayer, setActivePlayer] = useState(0);

    const diceImages = [diceOne, diceTwo, diceThree, diceFour, diceFive, diceSix];
  

    const switchPlayer = () => {
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
        setWinnerPlayer0(false);
        setWinnerPlayer1(false);
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
        
        if (newTotalScores[activePlayer] >= 100){
            if (activePlayer === 0) {
                setWinnerPlayer0(true);
            } else {
                setWinnerPlayer1(true);
            }
            return setDiceStart(false);
        }
        switchPlayer();
      };

    return (
        <div>
          <div className="main">
            <div className={`player ${activePlayer ? '' : 'player-active'} ${winnerPlayer0 ? 'player-winner' : ''}`}>
            <h2 className="name">Player 1</h2>
                    {winnerPlayer0 ? (<p className="winner">WINNER!</p>) : 
                    (<p className="score">{totalScore[0]}</p>)}
                <div className="current">
                    <p className="current-label">Current</p>
                    <p className="current-score">{activePlayer === 0 ? currentScore[0] : 0}</p>
                </div>
            </div>
            <div className={`player ${activePlayer ? 'player-active' : ''} ${winnerPlayer1 ? 'player-winner' : ''}`}>
                <h2 className="name">Player 2</h2>
                    {winnerPlayer1 ? (<p className="winner">WINNER!</p>) : 
                    (<p className="score">{totalScore[1]}</p>)}
                <div className="current">
                    <p className="current-label">Current</p>
                    <p className="current-score">{activePlayer === 1 ? currentScore[1] : 0}</p>
                </div>
            </div>

            {diceStart && (
                <Image
                    src={diceImages[currentDice - 1]}
                    className="dice"
                    alt="dice"
                />
            )}
            <button className="btn btn--new" onClick={newGame}>New Game</button>
            <button className="btn btn--roll" onClick={roll} disabled={winnerPlayer0 || winnerPlayer1}>Roll Dice</button>
            <button className="btn btn--hold" onClick={hold} disabled={winnerPlayer0 || winnerPlayer1}>Hold</button>
           </div>
        </div>
    );
};

export default DiceGame;