import * as React from 'react';
import styles from '../assets/styles/Logement.module.css'
import Carousel from './Carousel';

const Logement = ({data}) => {
    return (
        <>
        <div className={styles.bgModal}>
        <Carousel images={data.pictures}/>
        <h1 className={styles.title}>{data.title}</h1>
        <h2 className={styles.location}>{data.location}</h2>
        </div>
        </>
    )
    }

export default Logement;
