import React from 'react';

import styles from './Button.module.scss';

function Button({children, onClick}){
    
    return <button onClick={onClick} className={styles.button}>{children}</button>
}

export default Button;