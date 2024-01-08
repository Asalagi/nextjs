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
  const [innerDisplay, setInnerDisplay] = useState(<></>);
  
  const [adventureVisible, setAdventureVisible] = useState(true);
  const [walkingVisible, setWalkingVisable] = useState(true);
  const [turnLeftVisible, setTurnLeftVisible] = useState(true);
  const [turnRightVisible, setTurnRightVisible] = useState(true);
  const [ignoreVisible, setIgnoreVisible] = useState(true);
  const [investigateVisible, setInvestigateVisible] = useState(true);
  const [fightVisible, setFightVisible] = useState(true);
  const [runVisible, setRunVisible] = useState(true);
  const [aroundVisible, setAroundVisible] = useState(true);
  const [backVisible, setBackVisible] = useState(true);
  const [hackVisible, setHackVisible] = useState(true);
  const [pictureVisible, setPictureVisible] = useState(true);
  const [shootVisible, setShootVisible] = useState(true);
  const [homeVisible, setHomeVisible] = useState(true);
  const [newVisible, setNewVisible] = useState(true);

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
    const odds = Math.trunc(Math.random() * 50) + 1;
    console.log(odds);

    if (odds % 7 === 0){
      setDisplay(<>You have come to a fork in the road. Do you go left? Or do you go right? Choose your path.</>);
      setAdventureVisible(false);
      setWalkingVisable(true);
      setTurnLeftVisible(false);
      setTurnRightVisible(false);
    } else if (odds % 9 === 0) {
      setDisplay(<>You are happily walking down your trail until you hear a sound. Something is in the bushes. Would do you do?</>);
      setWalkingVisable(true);
      setIgnoreVisible(false);
      setInvestigateVisible(false);
    } else if (odds % 10 === 0){
      setDisplay(<>You&apos;re trail is becoming narrow. You notice the bushes and trees are getting thicker in front of you. Oh no! It looks like you have come to a deadend. What would you like to do.</>);
      setWalkingVisable(true);
      setAroundVisible(false);
      setBackVisible(false);
      setHackVisible(false);
    } else {
      setDisplay(<>{hikingPhrase}</>);
      setWalkingVisable(false);
    }
  };

  const goLeft = () => {
    setDisplay(<>You choose to go left and keep walking down the trail.</>);
    setWalkingVisable(false);
    setTurnLeftVisible(true);
    setTurnRightVisible(true);
  };

  const goRight = () => {
    setDisplay(<>You choose to go right and keep walking down the trail.</>);
    setWalkingVisable(false);
    setTurnLeftVisible(true);
    setTurnRightVisible(true);
  };

  const ignore = () => {
    setDisplay(<>You ignore the sound and keep walking with a little more pep in your step.</>);
    setWalkingVisable(false);
    setIgnoreVisible(true);
    setInvestigateVisible(true);
  };

  const investigate = () => {
    let investPhrases = [
      "You walk towards the bushes with caution. You reach to push aside branches but you see nothing. As you look down a sneaky little snake slithers over your foot. You jump! Best leave it alone.",
      "You walk towards the bushes with caution. The russeling is getting louder. It must be something big. You prepare yourself to run. You are almost to the bush and BAM something jumps out at you. You jump back and see a cute little rabbit. You feel a little dumb, but how cute and fluffy is this little rabbit.",
      "You walk towards the bushes with caution. The russeling is getting louder. You see a glipse of what looks like brown fur. What could it be? You take a step forward and a big bear steps out and roars. Frozen you are unsure of what to do. Fight or run?",
      "You walk towards the bushes with caution. You reach to push aside the branches. There is nothing there, but you see a shiny penny. Now you're a penny richer!"
    ]
    const investigatePhrase = investPhrases[Math.trunc(Math.random() * investPhrases.length)];
    setDisplay(<>{investigatePhrase}</>);

    if(investigatePhrase === investPhrases[2]){
      setWalkingVisable(true);
      setFightVisible(false);
      setRunVisible(false);
      setIgnoreVisible(true);
      setInvestigateVisible(true);
    } else {
      setWalkingVisable(false);
      setIgnoreVisible(true);
      setInvestigateVisible(true);
    }
  };

  const fight = () => {
    let fightPhrases = [
      "You see the bear. It stands up on it's hide legs and lets out a big roar. It's go time! This is it! You've always wanted to try and punch a bear. The bear comes are you and you punch. You have fists of steal and stone and you slam your fist into the bears face. It stops stares are you like you are a psycho for punching a bear and turns around and walks away. You won! Would you like to go home and tell your friends you punched a bear or keep hiking?",
      "You see the bear. It stands up on it's hide legs and lets out a big roar. It's go time! You prepare yourself to take down this beast of fur and anger. You run and strike the bear but he is a bear and you are a human. A humane snack. The bear grapples you and you are now a bear chew toy. Well atleast you tried."
    ];
    const fightPhrase = fightPhrases[Math.trunc(Math.random() * fightPhrases.length)];
    setDisplay(<>{fightPhrase}</>);

    if(fightPhrase === fightPhrases[1]){
      setDisplay(<></>);
      setInnerDisplay(<>YOU DIED! GAME OVER!</>)
      setFightVisible(true);
      setRunVisible(true);
      setWalkingVisable(true);
      setIgnoreVisible(true);
      setInvestigateVisible(true);
      setNewVisible(false);
    } else {
      setFightVisible(true);
      setRunVisible(true);
      setWalkingVisable(false);
      setIgnoreVisible(true);
      setInvestigateVisible(true);
      setHomeVisible(false);
    }
  };

  const home = () => {
    setDisplay(<>You have successfully made it home alive!</>);
    setNewVisible(false);
  };

  const restart = () => {
    location.reload();
  }

    return (
     <div>
        <h1 className="title">Adventurer</h1>
        <div className="container-main">
            <div id="display" className="display-container">
                <p>{display}</p>
            </div>
            <div id="inDisplay" className="inner-display">{innerDisplay}</div>
            <div id="btn-display" className="btn-container">
               <button id="start" className={`btn center ${adventureVisible ? '' : 'hidden'}`} onClick={startAdventure}>Go Adventuring!</button>
               <button id="hike" className={`btn center ${walkingVisible ? 'hidden' : ''}`} onClick={keepWalking}>Keep Walking</button>

               <button id="left" className={`btn center ${turnLeftVisible ? 'hidden' : ''}`} onClick={goLeft}>Go Left</button>
               <button id="right" className={`btn center ${turnRightVisible ? 'hidden' : ''}`} onClick={goRight}>Go Right</button>

               <button id="fight" className={`btn center ${fightVisible ? 'hidden' : ''}`} onClick={fight}>Fight!</button>
               <button id="run" className={`btn center ${runVisible ? 'hidden' : ''}`}>RUUUN!</button>

               <button id="ignore" className={`btn center ${ignoreVisible ? 'hidden' : ''}`} onClick={ignore}>Ignore</button>
               <button id="investigate" className={`btn center ${investigateVisible ? 'hidden' : ''}`} onClick={investigate}>investigate</button>

               <button id="turn" className={`btn center ${aroundVisible ? 'hidden' : ''}`}>Turn Around</button>
               <button id="back" className={`btn center ${backVisible ? 'hidden' : ''}`}>Go Back</button>
               <button id="hack" className={`btn center ${hackVisible ? 'hidden' : ''}`}>Hack Through</button>

               <button id="picture" className={`btn center ${pictureVisible ? 'hidden' : ''}`}>Take a Picture</button>
               <button id="shoot" className={`btn center ${shootVisible ? 'hidden' : ''}`}>Take a Shot</button>

               <button id="home" className={`btn center ${homeVisible ? 'hidden' : ''}`} onClick={home}>Go Home</button>
               <button id="restart" className={`btn center ${newVisible ? 'hidden' : ''}`} onClick={restart}>New Game</button>
            </div>           
        </div>
      </div>
    );
};

export default Adventure;
