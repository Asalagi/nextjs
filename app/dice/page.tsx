import './styling.css';
import Image from 'next/image';
// import diceOne from './dice-1.png';
// import diceTwo from './dice-2.png';
// import diceThree from './dice-3.png';
// import diceFour from './dice-4.png';
// import diceFive from './dice-5.png';
import diceSix from './dice-6.png';


function DiceGame(){
    return (
        <div>
          <main>
            <section className="player player--0 player--active">
                <h2 className="name" id="name--0">Player 1</h2>
                <p className="score" id="score--0">0</p>
                <div className="current">
                    <p className="current-label">Current</p>
                    <p className="current-score" id="current--0">0</p>
                </div>
            </section>
            <section className="player player--1">
                <h2 className="name" id="name--1">Player 2</h2>
                <p className="score" id="score--1">0</p>
                <div className="current">
                    <p className="current-label">Current</p>
                    <p className="current-score" id="current--1">0</p>
                </div>
            </section>

            <Image src={diceSix} className="dice" alt="dice"/>
            <button className="btn btn--new">New Game</button>
            <button className="btn btn--roll">Roll Dice</button>
            <button className="btn btn--hold">Hold</button>
           </main>
        </div>
    );
};

export default DiceGame;