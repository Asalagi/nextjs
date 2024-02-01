'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import horsePic from './Untitled.jpg';
import './styling.css';

interface Horse {
    id: string;
    name: string;
    breed: string;
    age: number;
    height: string;
    sex: string;
    color: string;
    pattern: string
    stats: {
        strength: number;
        speed: number;
        endurnace: number;
        agility: number;
        intelligence: number;
    };
    conformation: {
        head: number;
        neck: number;
        withers: number;
        back: number;
        shoulders: number;
        legs: number;
        knees: number;
        hooves: number;
    };
}

const horseId: string = "181";

function HorsePage() {
    const horseData: Horse = {
        id: horseId.padStart(8, "0"),
        name: "Frog",
        breed: "Paint Horse",
        age: 25,
        height: "15.2 hands",
        sex: "Gelding",
        color: "Bay",
        pattern: "Tobiano",
        stats: {
            strength: 0,
            speed: 0,
            endurnace: 0,
            agility: 0,
            intelligence: 0,
        },
        conformation: {
            head: 0,
            neck: 0,
            withers:  0,
            back: 0,
            shoulders: 0,
            legs: 0,
            knees: 0,
            hooves: 0, 
    },
};

const [hunger, setHunger] = useState(100);

useEffect(() => {
    const decreaseHunger = () => {
        setHunger(prevHunger => Math.max(prevHunger - 1, 0));
    };
    const intervalId = setInterval(decreaseHunger, 86400000);
    return () => clearInterval(intervalId);
}, []);

const hungerWidth = `${hunger}%`;
console.log(hungerWidth);

const conformationTotal = Object.values(horseData.conformation);
const conformationAverage = conformationTotal.reduce((sum, value) => sum + value, 0) / conformationTotal.length;

    return (
        <div className="main-container">
                <h2>{horseData.name}</h2>
                <div><hr className="line"/></div>
                <p>ID# {horseData.id}<br/></p>
          <div className="horse-data-container">
            <div className="left-container">
                <button>Feed</button>
                <button>Water</button>
                <button>Muck</button>
                <button>Groom</button><br/>
             <div className="bar-box">
                <div className="bar">
                 <div style={{ width: '100%', position: 'relative' }}>
                    <div className="hunger-bar" style={{ width: hungerWidth, position: 'relative' }}></div>
                    <div className="hunger-text">
                        Hunger {hungerWidth}
                    </div>
                 </div>
                </div>
                <div className="bar">Thirst</div>
                <div className="bar">Happiness</div>
                <div className="bar">Cleanliness</div>
                <div className="bar">Injury</div>
             </div>
                <button>Vet</button>
                <button>Farrier</button>
                <button>Train</button>
                <p className="reg-text">
                <span className="bold">Breed:</span> {horseData.breed}<br/>
                <span className="bold">Age:</span> {horseData.age}<br/>
                <span className="bold">Height:</span> {horseData.height}<br/>
                <span className="bold">Sex:</span> {horseData.sex}<br/>
                <span className="bold">Color:</span> {horseData.color}<br/>
                <span className="bold">Pattern:</span> {horseData.pattern}<br/></p>
            </div>
            <div className="right-container">
                <Image src={horsePic} width={600} height={500} className="horse" alt="horse"/>
            </div>
          </div>
         <div>
            <p> Conformation: </p>
         </div>
        </div>
    );
}
export default HorsePage;