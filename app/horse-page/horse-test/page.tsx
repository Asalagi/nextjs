'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import './horse-styles.css';
import horsesData from '../../../public/horses.json';

export default function HorseListPage() {
    // add in collapsable section for horses info instead of dynamic routing maybe
    const [horseDisplay, setHorseDisplay] = useState(true);

    const horseVisable = () => {
        setHorseDisplay(true)
    }

    return (
        <div className="main-container">
            <div className="top-container">top</div>
            <div className="center-container">
                <div className="side-content">
            <h1>Horse List</h1>
                    {horsesData.map((horse) => (
                    <div key={horse.id}>
                        {horse.id}
                        <Link href={`/horse-page/horse-test/${horse.id}`} onClick={horseVisable}> {horse.name} </Link>
                        {horse.breed}
                    </div>
                ))}
                </div>
                <div className="display-content">
                    <div className={`horse-display-info ${horseDisplay ? '' : 'hidden'}`}>
                        horse name

                <div className="reg-row">
                    <div className="reg-category">ID</div>
                    <div className="reg-category">Name</div>
                    <div className="reg-category">Breed</div>
                </div>
                {horsesData.map(horse => (
                <div className="reg-row" key={horse.id}>
                    <div className="reg-item">{horse.id}</div>
                    <div className="reg-item">{horse.name}</div>
                    <div className="reg-item">{horse.breed}</div>
                </div>
                ))}


                    </div>
                </div>
            </div>
            <div className="top-container">bottom</div>
        </div>
    );
};
