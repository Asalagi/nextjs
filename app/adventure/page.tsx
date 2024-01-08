'use client';
import { APP_PATH_ROUTES_MANIFEST } from '@/node_modules/next/dist/shared/lib/constants';
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
  
  const [adventureVisible, setAdventureVisible] = useState(true);
  const [walkingVisible, setWalkingVisable] = useState(true);
  const [turnLeftVisible, setTurnLeftVisible] = useState(true);
  const [turnRightVisible, setTurnRightVisible] = useState(true);

  const startAdventure = () => {
    setDisplay(<>You begin to happily walk down the trail. You&apos;re going on an adventure!</>);
    setAdventureVisible(false);
    setWalkingVisable(false);
  };

  const keepWalking = () => {
    let phrases = [
      "You keep walking down the trail. The sun is shining, and the birds are happily chirping.",
      "The day is beautiful, and you are enjoying the wonderful outdoors. You take a deep breath and take in the beauty of your surroundings.",
      "You walk down the trail happy to be out in nature. What beautiful scenery!"
    ];
    const hikingPhrase = phrases[Math.trunc(Math.random() * phrases.length)];
    setDisplay(<>{hikingPhrase}</>);

    const odds = Math.trunc(Math.random() * 50) + 1;
    console.log(odds);

    if (odds % 7 === 0){
      setDisplay(<>You have come to a fork in the road. Do you go left? Or do you go right? Choose your path.</>);
      setAdventureVisible(false);
      setWalkingVisable(true);
      setTurnLeftVisible(false);
      setTurnRightVisible(false);
    }
  }

  const goLeft = () => {
    setDisplay(<>You choose to go left and keep walking down the trail.</>);
    setWalkingVisable(false);
    setTurnLeftVisible(true);
    setTurnRightVisible(true);
  }

  const goRight = () => {
    setDisplay(<>You choose to go right and keep walking down the trail.</>);
    setWalkingVisable(false);
    setTurnLeftVisible(true);
    setTurnRightVisible(true);
  }

    return (
     <div>
        <h1 className="title">Adventurer</h1>
        <div className="container-main">
            <div id="display" className="display-container">
                <p>{display}</p>
            </div>
            <div id="inDisplay" className="inner-display"></div>
            <div id="btn-display" className="btn-container">
               <button id="start" className={`btn center ${adventureVisible ? '' : 'hidden'}`} onClick={startAdventure}>Go Adventuring!</button>
               <button id="hike" className={`btn center ${walkingVisible ? 'hidden' : ''}`} onClick={keepWalking}>Keep Walking</button>

               <button id="left" className={`btn center ${turnLeftVisible ? 'hidden' : ''}`} onClick={goLeft}>Go Left</button>
               <button id="right" className={`btn center ${turnRightVisible ? 'hidden' : ''}`} onClick={goRight}>Go Right</button>

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
