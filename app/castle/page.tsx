'use client';
import React, { useState } from 'react';
import './styling.css';

function Castle() {
    const [innerDisplay, setInnerDisplay] = useState('');
    const [lifeTick, setLifeTick] = useState(0);

    const hit = () => {
        setLifeTick(lifeTick + 2);
        console.log(lifeTick);

        if (lifeTick === 100 - 2){
            setInnerDisplay('You Died!')
        }
    };

    const heal = () => {
        if (lifeTick > 0){
            setLifeTick(lifeTick - 2);
            console.log(lifeTick);
        }
    }

    return (
        <div className="outer-container">
            <div className="title">Game Title Here</div>
            <div className="container-main">
                <div className="card">
                    <input placeholder="Name"></input>
                    <div className="life-bar">
                        <div className="life-tick" style={{ width: `${lifeTick}%` }}></div>
                    </div> 
                </div>
                <div className="display">Display messages here</div>
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