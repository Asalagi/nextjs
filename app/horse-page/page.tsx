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
            head: 38,
            neck: 43,
            withers:  24,
            back: 29,
            shoulders: 30,
            legs: 41,
            knees: 59,
            hooves: 60, 
    },
};

const [hunger, setHunger] = useState(100);

useEffect(() => {
    const decreaseHunger = () => {
        setHunger(prevHunger => Math.max(prevHunger - 1, 0));
    };
    const intervalId = setInterval(decreaseHunger, 864000);
    return () => clearInterval(intervalId);
}, []);

const hungerWidth = `${hunger}%`;
console.log(hungerWidth);

const conformationTotal = Object.values(horseData.conformation);
const conformationAverage =Math.round(conformationTotal.reduce((sum, value) => sum + value, 0) / conformationTotal.length);

const getConformation = (conformation: number) => {
    if (conformation >= 0 && conformation <= 30) {
        return 'Awful';
    } else if (conformation >= 31 && conformation <= 49) {
        return 'Poor';
    } else if (conformation >= 50 && conformation <= 85) {
        return 'Good';
    } else if (conformation >= 86 && conformation <= 95) {
        return 'Excellent';
    } else if (conformation >= 96) {
        return 'Perfect';
    } else {
        return 'Invalid Conformation';
    }
};

const conformationScoreHead = getConformation(horseData.conformation.head);
const conformationScoreNeck = getConformation(horseData.conformation.neck);
const conformationScoreWithers = getConformation(horseData.conformation.withers);
const conformationScoreBack = getConformation(horseData.conformation.back);
const conformationScoreShoulders = getConformation(horseData.conformation.shoulders);
const conformationScoreLegs = getConformation(horseData.conformation.legs);
const conformationScoreKnees = getConformation(horseData.conformation.knees);
const conformationScoreHooves = getConformation(horseData.conformation.hooves);

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
              <div className="info-box">
                <p className="reg-text">
                <span className="bold">Breed:</span> {horseData.breed}<br/>
                <span className="bold">Age:</span> {horseData.age}<br/>
                <span className="bold">Height:</span> {horseData.height}<br/>
                <span className="bold">Sex:</span> {horseData.sex}<br/>
                <span className="bold">Color:</span> {horseData.color}<br/>
                <span className="bold">Pattern:</span> {horseData.pattern}<br/></p>
              </div>  
              <div className="confo-box">
                <div className="confo-head bold reg-text"> Conformation Average: {conformationAverage}</div>
                <p className="reg-text"><span className="bold">Head:</span> {horseData.conformation.head} {conformationScoreHead}<br/>
                <span className="bold">Neck:</span> {horseData.conformation.neck} {conformationScoreNeck}<br/>
                <span className="bold">Withers:</span> {horseData.conformation.withers} {conformationScoreWithers}<br/>
                <span className="bold">Back:</span> {horseData.conformation.back} {conformationScoreBack}<br/>
                <span className="bold">Shoulders:</span> {horseData.conformation.shoulders} {conformationScoreShoulders}<br/>
                <span className="bold">Legs:</span> {horseData.conformation.legs} {conformationScoreLegs}<br/>
                <span className="bold">Knees:</span> {horseData.conformation.knees} {conformationScoreKnees}<br/>
                <span className="bold">Hooves:</span> {horseData.conformation.hooves} {conformationScoreHooves}</p>
            </div>
            </div>
            <div className="right-container">
                <Image src={horsePic} width={600} height={500} className="horse" alt="horse"/>
            </div>
          </div>
        </div>
    );
}
export default HorsePage;