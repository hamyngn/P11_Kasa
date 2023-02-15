import React, { useState } from 'react';
import styles from '../assets/styles/Carousel.module.css'
import {ReactComponent as PreviousIcon} from '../assets/images/chevron-left-solid.svg';
import {ReactComponent as NextIcon} from '../assets/images/chevron-right-solid.svg';

const Carousel = ({images}) => { 
    const [index, setIndex] = useState(0);
    const length = images.length
    const handlePrevious = () => { 
        const newIndex = index - 1; 
        setIndex(newIndex < 0 ? length - 1 : newIndex); 
    }; 
    const handleNext = () => { 
        const newIndex = index + 1; 
        setIndex(newIndex >= length ? 0 : newIndex); 
    }; 
    const childrens = images.map((i,index) =>         
        <img key={index} src={i} alt={'Cover '+ index}/>
    );
    return ( 
    <div className={styles.carouselContainer}> 
        <div className={styles.carouselWrapper}>
            {length > 1 && index > 0 && <PreviousIcon className={styles.previous} onClick={handlePrevious}/> }
            <div className={styles.carouselContentWrapper}>
                <div className={styles.carouselContent} style={{ transform: `translateX(-${index * 100}%)` }}>
                    {childrens}
                </div>
            </div>
            { length > 1 && <div className={styles.index}>{index+1}/{length}</div>}
            { length > 1 && index < length-1 && <NextIcon className={styles.next} onClick={handleNext}/> }
        </div>
    </div>
    )
}
export default Carousel;