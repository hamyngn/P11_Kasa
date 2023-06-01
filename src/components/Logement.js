import React from 'react';
import styles from '../assets/styles/Logement.module.css'
import Carousel from './Carousel';
import {ReactComponent as Star} from '../assets/images/star-solid.svg';
import Collapse from './Collapse';

const Logement = ({logement}) => {
    const tags = logement.tags.map ((i, index) => 
    <span key={index} className={styles.tag}> {i} </span>
    )
    let stars = []
    for(let i = 0; i< logement.rating; i+=1) {
        stars.push(<Star key={i + 'active'} className={styles.starActive}/>)
    }
    for(let i = 0; i< 5 - logement.rating; i+=1) {
        stars.push(<Star key={i} className={styles.star}/>)
    }
    
    return (
        <>
        <Carousel images={logement.pictures}/>
        <div className={styles.flexContainer}>
            <div className={styles.firstColumn}>
                <h1 className={styles.title}>{logement.title}</h1>
                <h2 className={styles.location}>{logement.location}</h2>
                <div className={styles.tagsContainer}>
                {tags}
                </div>
            </div>
            <div className={styles.secondColumn}>
            <div className={styles.flexRow}>
                <div className={styles.hostName}>
                <h3>{logement.host.name}</h3>
                </div>
                <img className={styles.profile} src={logement.host.picture} alt="Host"/>
            </div>
            <div className={styles.rate}>
                {stars}
            </div>
            </div>
        </div>
        <div className={styles.detailsContainer}>
            <Collapse
            className={styles.collapse} 
            styles={styles} 
            title='Description' 
            content={logement.description}/>
            <Collapse 
            className={styles.collapse} 
            styles={styles} 
            title='Equipements' 
            content={logement.equipments.map((i, index) => <span key = {'equipment ' + index}>{i}<br></br></span>)}/>
        </div>
        </>
    )
    }

export default Logement;
