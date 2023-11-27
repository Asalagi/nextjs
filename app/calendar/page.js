'use client';
import { useState } from 'react'; 
import './calendar.css';

function Calendar(){
    const dayLoop = () => {
        let days = [];
        for (let i = 1; i <= 31; i++) {
            days.push(i);
        }
        return days;
    };


    let months = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];
    return (
    <div>
        <div className="calendar-wrapper">
            <div className="title-container">
                <h1 className="month-title">
                    <button>Pev</button>{months[0]}<button>Next</button></h1>
            </div>
        <div className="calendar-table">
            {dayLoop().map(days => (
                <div className='week-box' key={days}></div>
            ))}
        </div>

        </div>
    </div>
    )
}

export default Calendar;