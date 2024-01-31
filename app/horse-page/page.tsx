'use client';
// import { useState, useEffect } from 'react';
import './styling.css';

interface Horse {
    id: string;
    name: string;
    breed: string;
    age: number;
    color: string;
    sex: string;
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

const horseId: string = "81";

function HorsePage() {
    const horseData: Horse = {
        id: horseId.padStart(10, "0").slice(0,1),
        name: "Frog",
        breed: "Paint Horse",
        age: 25,
        color: "Bay Tobiano",
        sex: "elding",
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

const conformationTotal = Object.values(horseData.conformation);
const conformationAverage = conformationTotal.reduce((sum, value) => sum + value, 0)

    return (
        <div className="main-container">
            <h2>Name</h2>
            <hr className="line"/>
            <p>ID#<br/>
            Owned by<br/>
            Bred by </p>
                <div>
                    <p> Conformation: </p>
                </div>
        </div>
    );
}
export default HorsePage;