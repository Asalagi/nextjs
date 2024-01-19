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


function DiceGame(){
    const [currentDice, setCurrentDice] = useState(0);
    const [diceStart, setDiceStart] = useState(false);
    const [startNew, setStartNew] = useState([0, 0])
    const [activePlayer, setActivePlayer] = useState(0);

    const roll = () => {
        const diceValue = Math.trunc(Math.random() *6)+ 1;
        setCurrentDice(diceValue);
        setDiceStart(true);
    };

    const newGame = () => {
        setDiceStart(false);
        setStartNew([0, 0]);
    };

    const hold = () => {
        const newScores = [...startNew];
        newScores[activePlayer] += currentDice;
        setStartNew(newScores);

        setActivePlayer((prevActivePlayer) => (prevActivePlayer === 0 ? 1 : 0));
      };

    return (
        <div>
          <div className="main">
            <div className="player player--0 player--active">
                <h2 className="name" id="name--0">Player 1</h2>
                <p className="score" id="score--0">0</p>
                <div className="current">
                    <p className="current-label">Current</p>
                    <p className="current-score" id="current--0">0</p>
                </div>
            </div>
            <div className="player player--1">
                <h2 className="name" id="name--1">Player 2</h2>
                <p className="score" id="score--1">0</p>
                <div className="current">
                    <p className="current-label">Current</p>
                    <p className="current-score" id="current--1">0</p>
                </div>
            </div>

            {diceStart && (
          <Image
            src={
              currentDice === 1
                ? diceOne
                : currentDice === 2
                ? diceTwo
                : currentDice === 3
                ? diceThree
                : currentDice === 4
                ? diceFour
                : currentDice === 5
                ? diceFive
                : diceSix
            }
            className="dice"
            alt="dice"
          />
        )}
            <button className="btn btn--new" onClick={newGame}>New Game</button>
            <button className="btn btn--roll" onClick={roll}>Roll Dice</button>
            <button className="btn btn--hold" onClick={hold}>Hold</button>
           </div>
        </div>
    );
};

export default DiceGame;