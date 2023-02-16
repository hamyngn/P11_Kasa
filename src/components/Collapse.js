import * as React from 'react';
import { useState } from 'react';
import styles from '../assets/styles/Collapse.module.css';
import {ReactComponent as ShowIcon} from '../assets/images/chevron-down-solid.svg';


const Collapse = ({content, title}) => {
    const [isShown, setIsShown] = useState(false);
    const handleClick = (event) => {
            setIsShown(current => !current); 
            isShown ? (event.currentTarget.style.transform = 'rotate(1turn)') : (event.currentTarget.style.transform = 'rotate(0.5turn)');
    }
    return (
        <div className = {styles.dropdown}>
            <div className={styles.flexRow}>
                <h1>{title}</h1>
                <div className = {styles.icon}><ShowIcon fill='white' onClick={handleClick}/></div>
            </div>
            {isShown && 
            <div className={styles.dropdownContent}>
                {content}
            </div>}
        </div>
    )
}

export default Collapse;