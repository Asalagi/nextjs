'use client';
import React, { useState } from 'react';
import './styling.css';

function Castle() {
    const [display, setDisplay] = useState('');
    const [innerDisplay, setInnerDisplay] = useState('');
    const [player, setPlayer] = useState('');
    const [lifeTick, setLifeTick] = useState(0);

    const [start, setStart] = useState(true);
    const [MountainPath, setMoutainPath] = useState(false);

    const hitPoints = Math.trunc(Math.random() * 10) + 1;
    const healPoints = Math. trunc(Math.random() * 15) + 1;

    const playerChange = (event) => {
        setPlayer(event.target.value);
    }

    const hit = () => {
        setLifeTick((prevLifeTick) => {
          const newLifeTick = prevLifeTick + hitPoints;
          setDisplay(`It strikes and you take ${hitPoints} points of damage.`);
          console.log(newLifeTick);
      
          if (newLifeTick > 100) {
            setLifeTick(100);
            setInnerDisplay('You Died!');
            return prevLifeTick;
          }
      
          return newLifeTick;
        });
      };

      const heal = () => {
        if (lifeTick > 0) {
          setLifeTick((prevLifeTick) => {
            const newLifeTick = prevLifeTick - healPoints;
            setDisplay(`You take a healing potion and heal ${healPoints} points.`);
            console.log(newLifeTick);
      
            if (newLifeTick <= 0) {
                setLifeTick(0);
                setInnerDisplay('You have been fully healed!')
            }

            return newLifeTick;
          });
        }
      };

      const startGame = () => {
        setDisplay('Let the game begin. Choose your path.')
        setStart(false);
        setMoutainPath(true);
      }

      //mpStart
      const mpStart = () => {
        setDisplay(`${player}, you have accepted this task, chosen your path and possibly your fate. Do well and bring back The Stone and you will be rewarded.`)
      }
      //mpTravelOne
      //mpTravelTwo
      //mpTravelThree
      //mpTravelFour
      //mpTravelFive
      //mpDestination

    return (
        <div className="outer-container">
            <div className="title">Game Title Here</div>
            <div className="container-main">
                <div className="card">
                    <input className="name" placeholder="Name" value={player} onChange={playerChange}></input>
                    <div className="life-bar">
                        <div className="life-tick" style={{ width: `${lifeTick}%` }}></div>
                    </div> 
                </div>
                <div className="display">{display}</div>
                <div className="inner-display">{innerDisplay}</div>
                <div className="btn-container">
                    <button className={`btn ${start ? '' : 'hidden'}`} onClick={startGame}>Start Task</button>
                    <button className="btn hidden" onClick={hit}>Fight</button>
                    <button className="btn hidden" onClick={heal}>Heal</button>
                    <button className="btn hidden">Go Iceway</button>
                    <button className={`btn ${MountainPath ? '' : 'hidden'}`} onClick={mpStart}>Go Mountain Pass</button>
                    <button className="btn hidden"></button>
                    <button className="btn hidden"></button>
                    <button className="btn hidden"></button>
                    <button className="btn hidden"></button>
                    <button className="btn hidden"></button>
                    <button className="btn hidden"></button>
                    <button className="btn hidden">Go Seaward</button>
                    <button className="btn hidden"></button>
                    <button className="btn hidden">button</button>
                </div>
            </div>
        </div>
    );
}

export default Castle;