'use client';
import { useState } from 'react'; 
import './calendar.css';

function Calendar(){
    const [month, setMonth] = useState(0);

    const dayLoop = () => {
        let days = [];
        for (let i = 1; i <= 31; i++) {
            days.push(i);
        }
        return days;
    };

    let months = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];

    const handlePrevMonth = () => {
        setMonth(month - 1)
    }

    const handleNextMonth = () => {
        setMonth(month + 1)
    }

    return (
    <div>
        <div className="calendar-wrapper">
            <div className="title-container">
                <h1 className="month-title">
                    <button className="calendar-btn" onClick={handlePrevMonth}>Pev</button> 
                        {months[month]} 
                    <button className="calendar-btn" onClick={handleNextMonth}>Next</button>
                </h1>
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