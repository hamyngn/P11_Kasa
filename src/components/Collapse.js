import * as React from 'react';
import { useState } from 'react';
import {ReactComponent as ShowIcon} from '../assets/images/chevron-down-solid.svg';


const Collapse = ({styles, content, title}) => {
    const [isShown, setIsShown] = useState(false);
    const handleClick = (event) => {
            setIsShown(current => !current); 
            isShown ? (event.currentTarget.style.transform = 'rotate(1turn)') : (event.currentTarget.style.transform = 'rotate(0.5turn)');
    }
    return (
        <div className = {styles.dropdown}>
            <div className={styles.collapseFlexRow}>
                <h1 className={styles.dropTitle}>{title}</h1>
                <div className = {styles.icon}><ShowIcon fill='white' onClick={handleClick}/></div>
            </div>
            {isShown && 
            <p className={styles.dropdownContent}>
            {content}
            </p>
            }
        </div>
    )
}

export default Collapse;