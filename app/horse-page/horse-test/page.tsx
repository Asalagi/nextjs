'use client';
import { useState } from 'react';
import './horse-styles.css';
import horsesData from '../../../public/horses.json';

export default function HorseListPage() {
    interface Horse {
        id: number;
        name: string;
        breed: string;
    }

    const [horseDisplay, setHorseDisplay] = useState<Horse | null>(null);

    const horseVisable = (horse: Horse | null) => {
        setHorseDisplay(horse); 
    }

    return (
        <div className="main-container">
            <div className="top-container">top</div>
            <div className="center-container">
                <div className="side-content">
            <h1>Horse List</h1>
            <div className="table">
                        <div className="reg-row">
                            <div className="reg-category">ID</div>
                            <div className="reg-category">Name</div>
                            <div className="reg-category">Breed</div>
                        </div>
                        {horsesData.map(horse => (
                        <div className="reg-row" key={horse.id}>
                            <div className="reg-item">{horse.id}</div>
                            <div className="reg-item" onClick={() => horseVisable(horse)}>{horse.name}</div>
                            <div className="reg-item">{horse.breed}</div>
                        </div>
                        ))}
                    </div>
                </div>
                <div className="display-content">
                    <div className="horse-display-info">
                        {horseDisplay && (
                            <div>
                                <h2>{horseDisplay.name}</h2>
                                <p>{horseDisplay.breed}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="top-container">bottom</div>
        </div>
    );
};
