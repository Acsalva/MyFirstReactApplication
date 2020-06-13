import React, { useState } from 'react';
import Button from './Button';

import styles from './StatSlider.module.scss';

function StatSlider({statName, maxValue = 10, minValue = 0}) {

    const [statValue, setStatValue] = useState(0);
    
    return (
        <div className={styles.statContainer}>
            <Button onClick={() => { setStatValue(Math.max(statValue - 1, minValue)) }}>-</Button>
            <p className={styles.statTxt}>{statName}: {statValue}</p>
            <Button onClick={() => { setStatValue(Math.min(statValue + 1, maxValue)) }}>+</Button>
        </div>
    )

}

export default StatSlider; 