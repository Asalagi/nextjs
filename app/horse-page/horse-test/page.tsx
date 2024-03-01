'use client';
import { useState } from 'react';
import Link from 'next/link';
import './horse-styles.css';
import horsesData from '../../../public/horses.json';

export default function HorseListPage() {
    // add in collapsable section for horses info instead of dynamic routing maybe
    const [horseDisplay, setHorseDisplay] = useState(false);

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
                    </div>
                </div>
            </div>
            <div className="top-container">bottom</div>
        </div>
    );
};
