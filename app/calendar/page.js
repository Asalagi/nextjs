import './calendar.css';

function Calendar(){
    const date = new Date();
    const month = date.toLocaleString("en-US", {
        month: "long"
    });
    const year = date.getFullYear();

    return (
    <div>
        <div className="calendar-wrapper">
            <div className="title-container">
                <h1 className="month-title">{month} {year}</h1>
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