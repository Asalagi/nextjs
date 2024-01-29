'use client';
import { useState, useEffect } from 'react';
import './styling.css';

function HorsePage() {
    const [id, setId] = useState("");

    useEffect(() => {
        const idRandom = Math.trunc(Math.random() * 10000000) +1;
        const idNum = idRandom.toString().padStart(8, "0").slice(0,8); 
        setId(idNum)
    }, []);

    return (
        <div>
            <h2>Name</h2>
            <hr/>
            <p>ID# {id}<br/>
            Owned by<br/>
            Bred by </p>
        </div>
    );
}
export default HorsePage;