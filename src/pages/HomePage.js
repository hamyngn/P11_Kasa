import React/* , { useEffect, useState }  */from 'react';
import homeImage from '../assets/images/home-image.png'
import styles from '../assets/styles/Home.module.css';
import stockData from '../data/data.js'
/* import Logement from '../components/Logement.js' */

const HomePage = () => {
/*     const [data, setData] = useState(null);
    const handleClick = (data) => {
        setData ({data});
     }  
    useEffect(() => {
    setData(data)
    },[data]) */

    const articles = stockData.map((i) =>         
    <article key={i.id} className= {styles.articleContainer} /* onClick={handleClick({i})} */>
    <h2 className={styles.title}>{i.title}</h2>
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
{/*     <div>
    <Logement data= {data}/>
    </div> */}
    </>
    );
}
export default HomePage;
/* const Logement = ({data}) => {
    return (
        <div>{data.title}</div>
    )
    } */
