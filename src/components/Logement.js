import * as React from 'react';
import styles from '../assets/styles/Logement.module.css'
import Carousel from './Carousel';

const Logement = ({data}) => {
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
                <h3>{data.host.name}</h3>
                <img className={styles.profile} src={data.host.picture} alt="Host"/>
            </div>
        </div>
        </div>
        </>
    )
    }

export default Logement;
