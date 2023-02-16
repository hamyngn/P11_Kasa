import React, { useState, useRef, useEffect } from 'react';
import homeImage from '../assets/images/home-image.png'
import styles from '../assets/styles/Home.module.css';
import stockData from '../data/data.js'
import Logement from '../components/Logement.js'

const HomePage = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [expandedCard, setExpandedCard]= useState(null);
    const ref = useRef()

    const handleClick = (id) => {
        setExpandedCard(id)
        setIsExpanded(true)
    } 
    useEffect(() => {
        const checkIfClickedOutside = e => {
          if (isExpanded && ref.current && !ref.current.contains(e.target)) {
            setIsExpanded(false)
          }
        }
        document.addEventListener("mousedown", checkIfClickedOutside)
    
        return () => {
          document.removeEventListener("mousedown", checkIfClickedOutside)
        }
      }, [isExpanded])

    const articles = stockData.map((i) =>         
    <article key={i.id} className= {styles.articleContainer} onClick={() => handleClick(i.id)}>
    <h2 className={styles.title}>{i.title}</h2>
    {isExpanded && expandedCard === i.id && <div ref={ref}><Logement data= {i} /></div>}
    </article> 
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