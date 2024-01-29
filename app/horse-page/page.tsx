'use client';
import { useState, useEffect } from 'react';
import './styling.css';

function HorsePage() {
    const [id, setId] = useState("");
    const [conformation, setConformation] = useState({
        head: 0,
        neck: 0,
        withers: 0,
        back: 0,
        shoulders: 0,
        legs: 0,
        knees: 0,
        hooves: 0,
    });

    const randomConformation = () => {
        const randomValue = () => Math.random() * 65;

        setConformation({
            head: randomValue(),
            neck: randomValue(),
            withers: randomValue(),
            back: randomValue(),
            shoulders: randomValue(),
            legs: randomValue(),
            knees: randomValue(),
            hooves: randomValue(),
        });
    };

    const randomId = () => {
        const idRandom = Math.trunc(Math.random() * 10000000) + 1;
        const idNum = idRandom.toString().padStart(8, "0").slice(0, 8);
        setId(idNum);
    };

    const conformationLabel = (item: number) => {
        if (item < 25) {
            return "Awful";
        } else if (item < 50){
            return "Poor";
        } else {
            return "Good";
        }
    };

    const average = (): number => {
        const values = Object.values(conformation);
        const sum = values.reduce((acc, value) => acc + value, 0);
        return sum / values.length;
    }

    useEffect(() => {
        randomId();
        randomConformation();
    }, []);

    return (
        <div>
            <h2>Name</h2>
            <hr/>
            <p>ID# {id}<br/>
            Owned by<br/>
            Bred by </p>
                <div>
                    <p> Head {conformation.head.toFixed(2)} {conformationLabel(conformation.head)}<br/>
                        Neck {conformation.neck.toFixed(2)} {conformationLabel(conformation.neck)}<br/>
                        Withers {conformation.withers.toFixed(2)} {conformationLabel(conformation.withers)}<br/>
                        Back {conformation.back.toFixed(2)} {conformationLabel(conformation.back)}<br/>
                        Shoulders {conformation.shoulders.toFixed(2)} {conformationLabel(conformation.shoulders)}<br/>
                        Legs {conformation.legs.toFixed(2)} {conformationLabel(conformation.legs)}<br/>
                        Knees {conformation.knees.toFixed(2)} {conformationLabel(conformation.knees)}<br/>
                        Hooves {conformation.hooves.toFixed(2)} {conformationLabel(conformation.hooves)}<br/>
                        Average {average().toFixed(2)}
                    </p>
                </div>
        </div>
    );
}
export default HorsePage;