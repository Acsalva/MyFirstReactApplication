import React, { useState } from 'react';
import Button from './Button';

import  './StatSlider.css';

function StatSlider({statName, maxValue = 10, minValue = 0}) {

    const [statValue, setStatValue] = useState(0);
    
    return (
        <div className="stat-container">
            <Button onClick={() => { setStatValue(Math.max(statValue - 1, minValue)) }}>-</Button>
            <p className="stat-txt">{statName}: {statValue}</p>
            <Button onClick={() => { setStatValue(Math.min(statValue + 1, maxValue)) }}>+</Button>
        </div>
    )

}

export default StatSlider; 