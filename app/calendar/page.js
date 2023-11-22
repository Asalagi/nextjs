'use client';
import { useState } from 'react'; 
import './calendar.css';

function Calendar(){
    let today = new Date();
    let months = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];
    let currentMonth = months[today.getMonth()];
    let year = today.getFullYear();

    let prev = months[today.getMonth() - 1];
    let next = months[today.getMonth() + 1];

    const [count, setCount] = useState(0);

    function handlePrevChange(){
        setCount((count) => count - 1);
        console.log(count)
    }

    function handleNextChange(){
        setCount((count) => count + 1);
        console.log(count)
    }

    return (
    <div>
        <div className="calendar-wrapper">
            <div className="title-container">
                <h1 className="month-title">
                    <button onClick={handlePrevChange}>Pev</button>{months[0]} {year}<button onClick={handleNextChange}>Next</button></h1>
            </div>
            <div className="calendar-table">
                <div className="week-box">Sunday</div>
                <div className="week-box">Monday</div>
                <div className="week-box">Tuesday</div>
                <div className="week-box">Wednesday</div>
                <div className="week-box">Thursday</div>
                <div className="week-box">Friday</div>
                <div className="week-box">Saturday</div>
            </div>
        </div>
    </div>
    )
}

export default Calendar;