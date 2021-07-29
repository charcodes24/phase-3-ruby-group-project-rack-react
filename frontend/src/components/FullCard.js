import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function FullCard({ parks }) {
    const [hikes, setHikes] = useState([])
    const { name } = useParams();

    useEffect(() => {
        fetch('http://localhost:9393/national_parks/hikes/')
        .then(res => res.json())
        .then(data => {
            console.log(data)})
    }, []);

    return (
        <div>
            {parks.filter((park) => park.name === name)
            .map((park, index) => {
                return (
                    <div key={index}>
                    <h1>Hikes I've Done in: {park.name}</h1>
                    </div>
                )
            })}
        </div>
    )
}

export default FullCard;