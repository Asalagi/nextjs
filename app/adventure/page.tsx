'use client';
import { useState } from 'react';
import './styling.css';

function Adventure () {
  const [display, setDisplay] = useState(
    <>
      Welcome Adventurer!<br />
      <br />
      Are you ready for a fun adventure today? There are a few things I should mention before you start. Sometimes there are forks in the road, make sure you remember which way you are going so you don&apos;t get lost. Make sure you stay aware of your surroundings and watch out for bears, cougars, and snakes. There have been some rumors about treasures and valuable items being found.<br />
      <br />
      Happy trailing, fellow Adventurer!
    </>
  );
  

    return (
     <div>
        <h1 className="title">Adventurer</h1>
        <div className="container-main">
            <div id="display" className="display-container">
                <p>{display}</p>
            </div>
            <div id="inDisplay" className="inner-display"></div>
            <div id="btn-display" className="btn-container">
               <button id="start" className="btn center">Go Adventuring!</button>
               <button id="hike" className="btn center hidden">Keep Walking</button>

               <button id="left" className="btn center hidden">Go Left</button>
               <button id="right" className="btn center hidden">Go Right</button>

               <button id="fight" className="btn center hidden">Fight!</button>
               <button id="run" className="btn center hidden">RUUUN!</button>

               <button id="ignore" className="btn center hidden">Ignore</button>
               <button id="investigate" className="btn center hidden">investigate</button>

               <button id="turn" className="btn center hidden">Turn Around</button>
               <button id="back" className="btn center hidden">Go Back</button>
               <button id="hack" className="btn center hidden">Hack Through</button>

               <button id="picture" className="btn center hidden">Take a Picture</button>
               <button id="shoot" className="btn center hidden">Take a Shot</button>

               <button id="home" className="btn center hidden">Go Home</button>
               <button id="restart" className="btn center hidden">New Game</button>
            </div>           
        </div>
      </div>
    );
};

export default Adventure;
