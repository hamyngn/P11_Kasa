import * as React from 'react';
import styles from '../assets/styles/Logement.module.css'
import Carousel from './Carousel';
import {ReactComponent as Star} from '../assets/images/star-solid.svg';
import Collapse from './Collapse';

const Logement = ({data}) => {
    const tags = data.tags.map ((i, index) => 
    <span key={index} className={styles.tag}> {i} </span>
    )
    let stars = []
    for(let i = 0; i< data.rating; i+=1) {
        stars.push(<Star key={i + 'active'} className={styles.starActive}/>)
    }
    for(let i = 0; i< 5 - data.rating; i+=1) {
        stars.push(<Star key={i} className={styles.star}/>)
    }
    
    return (
        <>
        <div className={styles.bgModal}>
        <Carousel images={data.pictures}/>
        <div className={styles.flexContainer}>
            <div className={styles.flexColumn}>
                <h1 className={styles.title}>{data.title}</h1>
                <h2 className={styles.location}>{data.location}</h2>
            </div>
            <div className={styles.flexRow}>
                <div className={styles.hostName}>
                <h3>{data.host.name}</h3>
                </div>
                <img className={styles.profile} src={data.host.picture} alt="Host"/>
            </div>
        </div>
        <div className={styles.tagsRateWrap}>
            <div className={styles.tagsContainer}>
                {tags}
            </div>
            <div style={{display: "flex"}}>
                {stars}
            </div>
        </div>
        <div className={styles.detailsContainer}>
            <Collapse
            className={styles.collapse} 
            styles={styles} 
            title='Description' 
            content={data.description}/>
            <Collapse 
            className={styles.collapse} 
            styles={styles} 
            title='Equipements' 
            content={data.equipments.map((i, index) => <div key = {'equipment ' + index}>{i}</div>)}/>
        </div>
        </div>
        </>
    )
    }

export default Logement;
