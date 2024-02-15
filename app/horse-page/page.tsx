'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import horsePic from './Untitled.jpg';
import './styling.css';

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

    const [hunger, setHunger] = useState(75);
    const [thirst, setThirst] = useState(75);
    const [happy, setHappy] = useState(75);
    
    useEffect(() => {
        const decreaseHunger = () => {
            setHunger(prevHunger => {
                const newHunger = Math.max(prevHunger - 1, 0);
                return newHunger;
            });
        };
        const intervalId = setInterval(decreaseHunger, 60000); 
        return () => clearInterval(intervalId);
    }, []);

    const feed = () => {
        setHunger(100);
    };

    const hungerWidth = `${hunger}%`;


    useEffect(() => {
        const decreaseWater = () => {
            setThirst(prevThirst => {
                const newThirst = Math.max(prevThirst - 1, 0);
                return newThirst;
            });
        };
        const intervalId = setInterval(decreaseWater, 60000); 
        return () => clearInterval(intervalId);
    }, []);

    const water = () => {
        setThirst(100);
    }

    const thirstWidth = `${thirst}%`;

    useEffect(() => {
        const decreaseHappy = () => {
            setHappy(prevHappy => {
                const newHappy = Math.max(prevHappy - 1, 0);
                return newHappy;
            });
        };
        const intervalId = setInterval(decreaseHappy, 12000);
        return () => clearInterval(intervalId);
    }, []);

    const happyPoints = Math. trunc(Math.random() * 5) + 1;

    const makeHappy = () => {
        if (happy > 0) {
          setHappy((prevHappiness) => {
            const newHappiness = prevHappiness + happyPoints;
            if (newHappiness >= 100) {
                setHappy(100);
            }
            return newHappiness;
          });
        }
      };

    const happyWidth = `${happy}%`;

    /* add in happiness, decrease at different rate but have things like
       turnout time, leisure ride, grooming, treating and nose boops
    */
   
   /* add in cleanliness, this will decrease as horse needs to be groomed and stall cleaned.
      buttons like groom, bath and muck stall will be added. If not done horse will become 
      unhappy 
    */

    /* add train button and on random this button will cause injury and decrease happiness.
       If horse is injured training, turnout and riding button will be disabled, and things like,
       hand walk, cold water and therapy will be added
    */

    const conformationTotal = Object.values(horseData.conformation);
    const conformationAverage = Math.round(conformationTotal.reduce((sum, value) => sum + value, 0) / conformationTotal.length);

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
            <h2 className="center">{horseData.name}</h2>
            <p className="center">ID# {horseData.id}<br/></p>
            <div className="horse-data-container">
                <div className="left-container">
                    <button onClick={feed}>Feed</button>
                    <button onClick={water}>Water</button>
                    <button>Muck</button>
                    <button onClick={makeHappy}>Groom</button><br/>
                    <div className="bar-box">
                        <div className="bar">
                            <div style={{ width: '100%', position: 'relative' }}>
                                <div className="full-bar" style={{ width: hungerWidth, position: 'relative' }}></div>
                                <div className="full-bar-text">
                                    Hunger {hungerWidth}
                                </div>
                            </div>
                        </div>
                        <div className="bar">
                            <div style={{ width: '100%', position: 'relative' }}>
                                <div className="full-bar" style={{ width: thirstWidth, position: 'relative' }}></div>
                                <div className="full-bar-text">
                                    Thirst {thirstWidth}
                                </div>
                            </div>
                        </div>
                        <div className="bar">
                            <div style={{ width: '100%', position: 'relative' }}>
                                <div className="full-bar" style={{ width: happyWidth, position: 'relative' }}></div>
                                <div className="full-bar-text">
                                    Happiness {happyWidth}
                                </div>
                            </div>
                        </div>  
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
                            <div className="confo-score reg-text">
                                {conformationScoreHead}<br/>
                                {conformationScoreNeck}<br/>
                                {conformationScoreWithers}<br/>
                                {conformationScoreShoulders}<br/>
                                {conformationScoreBack}<br/>
                                {conformationScoreLegs}<br/>
                                {conformationScoreKnees}<br/>
                                {conformationScoreHooves}
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
