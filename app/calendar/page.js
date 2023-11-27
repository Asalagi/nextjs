'use client';
import { useState } from 'react'; 
import './calendar.css';

function Calendar(){
    let days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
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
            {days.map(days => (
                <div className='week-box' key={days}></div>
            ))}
        </div>

        </div>
    </div>
    )
}

export default Calendar;