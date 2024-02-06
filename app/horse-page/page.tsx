'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import horsePic from './Untitled.jpg';
import './styling.css';

const HUNGER_STORAGE_KEY = 'hunger';


function HorsePage() {
    const horseData = {
        id: "00000181",
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
            endurance: 0,
            agility: 0,
            intelligence: 0,
        },
        conformation: {
            head: 38,
            neck: 43,
            withers: 24,
            back: 29,
            shoulders: 30,
            legs: 41,
            knees: 59,
            hooves: 60,
        },
    };

    const [hunger, setHunger] = useState(() => {
        const storedHunger = localStorage.getItem(HUNGER_STORAGE_KEY);
        return storedHunger ? parseInt(storedHunger, 10) : 100;
    });
    
    useEffect(() => {
        const decreaseHunger = () => {
            setHunger(prevHunger => {
                const newHunger = Math.max(prevHunger - 1, 0);
                localStorage.setItem(HUNGER_STORAGE_KEY, newHunger.toString());
                return newHunger;
            });
        };
        const intervalId = setInterval(decreaseHunger, 432000); 
        return () => clearInterval(intervalId);
    }, []);

    const feed = () => {
        setHunger(100);
        localStorage.setItem(HUNGER_STORAGE_KEY, '100');
    };

    const hungerWidth = `${hunger}%`;

    const conformationTotal = Object.values(horseData.conformation);
    const conformationAverage = Math.round(conformationTotal.reduce((sum, value) => sum + value, 0) / conformationTotal.length);

    return (
        <div className="main-container">
            <h2 className="center">{horseData.name}</h2>
            <p className="center">ID# {horseData.id}<br/></p>
            <div className="horse-data-container">
                <div className="left-container">
                    <button onClick={feed}>Feed</button>
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
                        <div className="title-container bold reg-text">
                            Breed<br/>
                            Age<br/>
                            Height<br/>
                            Sex<br/>
                            Color<br/>
                            Pattern<br/>
                        </div>
                        <div className="info-container reg-text">
                            {horseData.breed}<br/>
                            {horseData.age}<br/>
                            {horseData.height}<br/>
                            {horseData.sex}<br/>
                            {horseData.color}<br/>
                            {horseData.pattern}<br/>
                        </div>
                    </div>  
                    <div className="confo-box">
                        <div className="confo-head bold reg-text"> Conformation Average: {conformationAverage}</div>
                        <div className="confo-container">
                            <div className="title-container bold reg-text">
                                Head<br/>
                                Neck<br/>
                                Withers<br/>
                                Back<br/>
                                Shoulders<br/>
                                Legs<br/>
                                Knees<br/>
                                Hooves
                            </div>
                            <div className="info-container reg-text">
                                {horseData.conformation.head}<br/>
                                {horseData.conformation.neck}<br/>
                                {horseData.conformation.withers}<br/>
                                {horseData.conformation.shoulders}<br/>
                                {horseData.conformation.back}<br/>
                                {horseData.conformation.legs}<br/>
                                {horseData.conformation.knees}<br/>
                                {horseData.conformation.hooves}
                            </div>
                        </div>
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
