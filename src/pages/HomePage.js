import React from 'react';
import homeImage from '../assets/images/home-image.png'
import styles from '../assets/styles/Home.module.css';
import stockData from '../data/data.js'
import { Link } from 'react-router-dom';

const HomePage = () => {
    const articles = stockData.map((i) =>     
    <Link key={i.id} to={'/logement/' + i.id}>   
    <article className= {styles.articleContainer}>
    <h2 className={styles.title}>{i.title}</h2>
    </article>
    </Link> 
    );

    return (
    <>
    <div className={styles.container}>
        <img className={styles.header} src={homeImage} alt='Mountain And Sea' />
        <h1 className={styles.slogan}>Chez vous, partout et ailleurs</h1>
    </div>
    <section className={styles.locationBackGround}>
        {articles}
    </section>
    </>
    );
}
export default HomePage;