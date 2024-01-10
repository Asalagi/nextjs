'use client';
import React, { useState } from 'react';
import './styling.css';

function Castle() {
    const [display, setDisplay] = useState('');
    const [innerDisplay, setInnerDisplay] = useState('');
    const [lifeTick, setLifeTick] = useState(0);

    const hitPoints = Math.trunc(Math.random() * 10) + 1;
    const healPoints = Math. trunc(Math.random() * 15) + 1;

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

    return (
        <div className="outer-container">
            <div className="title">Game Title Here</div>
            <div className="container-main">
                <div className="card">
                    <input className="name" placeholder="Name"></input>
                    <div className="life-bar">
                        <div className="life-tick" style={{ width: `${lifeTick}%` }}></div>
                    </div> 
                </div>
                <div className="display">{display}</div>
                <div className="inner-display">{innerDisplay}</div>
                <div className="btn-container">
                    <button className="btn" onClick={hit}>Fight</button>
                    <button className="btn" onClick={heal}>Heal</button>
                    <button className="btn">button</button>
                    <button className="btn">button</button>
                    <button className="btn">button</button>
                    <button className="btn">button</button>
                    <button className="btn">button</button></div>
            </div>
        </div>
    );
}

export default Castle;