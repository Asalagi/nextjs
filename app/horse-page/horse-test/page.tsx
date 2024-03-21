'use client';
import { useEffect, useState } from 'react';
import './horse-styles.css';
import horsesData from '../../../public/horses.json';

export default function HorseListPage() {
    interface Horse {
        id: number;
        name: string;
        breed: string;
        age: number;
        color: string;
        height: string;
        sex: string;
        notes: string; 
    }

    const [horseDisplay, setHorseDisplay] = useState<Horse | null>(null);
    const [sortClicked, setSortClicked] = useState(false);
    const [sortedHorses, setSortedHorses] = useState<Horse[]>([]);

    useEffect(() => {
        setSortedHorses(horsesData);
    }, []);

    const horseVisable = (horse: Horse | null) => {
        setHorseDisplay(horse); 
    }

    const handleSortByName = () => {
        const sortedHorsesByName = [...horsesData].sort((a,b) => {
            return a.name > b.name ? 1 : -1
        })
        setSortedHorses(sortedHorsesByName);
        setSortClicked(true)
    }

    return (
        <div className="main-container">
            <div className="top-container">top</div>
            <div className="center-container">
                <div className="side-content">
            <h1>Horse List</h1> <button onClick={handleSortByName}>Sort By Name</button>
            <div className="table">
                        <div className="reg-row">
                            <div className="reg-category">ID</div>
                            <div className="reg-category">Name</div>
                            <div className="reg-category">Breed</div>
                        </div>
                        {(sortClicked ? sortedHorses : horsesData).map(horse => (
                        <div className="reg-row" key={horse.id}>
                            <div className="reg-item">{horse.id}</div>
                            <div className="reg-item click" onClick={() => horseVisable(horse)}>{horse.name}</div>
                            <div className="reg-item">{horse.breed}</div>
                        </div>
                        ))}
                    </div>
                </div>
                <div className="display-content">
                    <div className="horse-display-info">
                        {horseDisplay && (
                            <div>
                                <h2 className="horse-name">{horseDisplay.name}</h2>
                                <p className="horse-info">{horseDisplay.age} {horseDisplay.color} {horseDisplay.breed} {horseDisplay.sex}, {horseDisplay.height}<br/>
                                Notes: {horseDisplay.notes}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="bottom-container">bottom</div>
        </div>
    );
};
