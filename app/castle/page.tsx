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
    const [mpOne, setMpOne] = useState(false);
    const [mpCabin, setMpCabin] = useState(false);
    const [mpWalkOne, setMpWalkOne] = useState(false);
    const [takeHeal, setTakeHeal] = useState(false);
    const [healPotiion, setHealPotion] = useState(false);
    const [takeBounty, setTakeBounty] = useState(false);

 
    const hitPoints = Math.trunc(Math.random() * 10) + 1;
    const healPoints = Math. trunc(Math.random() * 15) + 1;

    const playerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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

      const takePotion = () => {
        setHealPotion(false);
        const healAmount1 = Math.trunc(Math.random() * 10 + 1);
        const healAmount2 = Math.trunc(Math.random() * 10 + 1);
        const healAmount3 = Math.trunc(Math.random() * 10 + 1);
        const healAmount4 = Math.trunc(Math.random() * 10 + 1);
        const healAmount = healAmount1 + healAmount2 + healAmount3 + healAmount4 + 4;
        
        if (lifeTick > 0) {
        setLifeTick((prevLifeTick) => {
          const newLifeTick = prevLifeTick - healAmount;
          setDisplay(`You take a healing potion and heal ${healAmount} points.`);
          console.log(newLifeTick);
    
          if (newLifeTick <= 0) {
              setLifeTick(0);
              setInnerDisplay('You have been fully healed!')
          }

          return newLifeTick;
        });
      }
    };

    const bounty = () => {
      setTakeBounty(true);
    }

      const startGame = () => {
        setDisplay('Let the game begin. Choose your path.')
        setStart(false);
        setMoutainPath(true);
      }

      //mpStart
      const mpStart = () => {
        setDisplay(`${player}, you have accepted this task, chosen your path and possibly your fate. Do well and bring back The Stone and you will be rewarded.`);
        setMpOne(true);
        setMoutainPath(false);
      }

      //mpTravelOne
      const mpTravelOne = () => {
        setDisplay("Walking on your merry way down the Mountain Pass road. Things are looking good, the sky is bright and sunny. You see the forest a head of you. Off to your right you see a small cabin, smoke gently rising from the chimney. Curious, do you stop at the cabin or continue on the road into the forrest?");
        setMpOne(false);
        setMpCabin(true);
        setMpWalkOne(true);
      };

      const cabin = () => {
        setDisplay('You walk up to the cabin. As you raise your hand to knock on the door, it suddenly begins to slowly open. "hello", you call quietly. You see a little old lady, long unkep wavy grey hair. "hello, yougin. come in, come in." She calls to you, waving you over. You take a deep breath and step into the cabin. The door closes behind you.');
        setMpCabin(false);
        setMpWalkOne(false);
        setTakeHeal(true);
      }
      const potion = () => {
        setDisplay('You gratefully take the healing potion, wave to the old lady and set off into the forest.');
        setHealPotion(true);
        setTakeHeal(false);
        setMpWalkOne(true);
      }

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
                    <button className={`btn-two ${healPotiion ? '' : 'hidden'}`} onClick={takePotion}>🧪</button>
                    <button className={`btn-two ${takeBounty ? '' : 'hidden'}`} onClick={bounty}>💎</button>
                </div>
                <div className="display">{display}</div>
                <div className="inner-display">{innerDisplay}</div>
                <div className="btn-container">
                    <button className={`btn ${start ? '' : 'hidden'}`} onClick={startGame}>Start Task</button>
                    <button className="btn hidden" onClick={hit}>Fight</button>
                    <button className="btn hidden" onClick={heal}>Heal</button>
                    <button className="btn hidden">Go Iceway</button>
                    <button className={`btn ${MountainPath ? '' : 'hidden'}`} onClick={mpStart}>Go Mountain Pass</button>
                    <button className={`btn ${mpOne ? '' : 'hidden'}`} onClick={mpTravelOne}>Continue On</button>
                    <button className={`btn ${mpCabin ? '' : 'hidden'}`} onClick={cabin}>Stop at the Cabin</button>
                    <button className={`btn ${mpWalkOne ? '' : 'hidden'}`}>Walk to the Forest</button>
                    <button className={`btn ${takeHeal ? '' : 'hidden'}`} onClick={potion}>Take Healing Potion</button>
                    <button className={`btn ${takeBounty ? '' : 'hidden'}`} onClick={bounty}>Take Lost Diamond!</button>
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