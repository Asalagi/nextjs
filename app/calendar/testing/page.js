'use client';
import React from 'react';
import './calendar.css';

function Calendar() {
    const dayLoop = () => {
        let days = [];
        for (let i = 1; i <= 31; i++) {
            days.push(i);
        }
        return days;
    };

    const weekBoxes = dayLoop().map((day, index) => (
        <div key={index} className='week-box'>
            {day}
        </div>
    ));

    return (
        <div>
            <div className="calendar-table">
                {weekBoxes}
            </div>
        </div>
    );
}

export default Calendar;
