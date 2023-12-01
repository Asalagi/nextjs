'use client';
import { useState } from 'react'; 
import './calendar.css';


function Calendar(){
    const [month, setMonth] = useState(0);

    const dayLoop = () => {
        let days = [];
        for (let i = 1; i <= 35; i++) {
            days.push(i);
        }
        return days;
    };

    let months = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];

    const handlePrevMonth = () => {
        if(month - 1 < 0){
            setMonth(month);
        } else{
        setMonth(month - 1)
        }
    }

    const handleNextMonth = () => {
        if(month + 1 > 11){
            setMonth(month);
        } else{
            setMonth(month + 1)
        }
    }

    return (
    <div>
        <div className="calendar-wrapper">
            <div className="title-container">
                 <button className="calendar-btn" onClick={handlePrevMonth}>{'<<'} Pev</button> 
                    <h1 className="month-title">{months[month]}</h1>
                <button className="calendar-btn" onClick={handleNextMonth}>Next {'>>'}</button>
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