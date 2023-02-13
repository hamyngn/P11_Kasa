import * as React from 'react';
import { useState } from 'react';
import styles from '../assets/styles/Proposed.module.css';
import {ReactComponent as ShowIcon} from '../assets/images/chevron-down-solid.svg';
import proposedImage from '../assets/images/a-propose.png'

const ProposedPage = () => {
    const [isShown1, setIsShown1] = useState(false);
    const [isShown2, setIsShown2] = useState(false);
    const [isShown3, setIsShown3] = useState(false);
    const [isShown4, setIsShown4] = useState(false);
    const handleClick = (n) => event => {
        switch(n){
            case 1: 
            setIsShown1(current => !current); 
            isShown1 ? (event.currentTarget.style.transform = 'rotate(1turn)') : (event.currentTarget.style.transform = 'rotate(0.5turn)');
            break;
            case 2: 
            setIsShown2(current => !current)
            isShown2 ? (event.currentTarget.style.transform = 'rotate(1turn)') : (event.currentTarget.style.transform = 'rotate(0.5turn)');
            break;
            case 3: 
            setIsShown3(current => !current)
            isShown3 ? (event.currentTarget.style.transform = 'rotate(1turn)') : (event.currentTarget.style.transform = 'rotate(0.5turn)');
            break
            case 4: 
            setIsShown4(current => !current)
            isShown4 ? (event.currentTarget.style.transform = 'rotate(1turn)') : (event.currentTarget.style.transform = 'rotate(0.5turn)');
            break;
            default:
                return null;
        }
    }
    return (
        <>
        <img className={styles.header} src={proposedImage} alt='Mountain And River' />
        <section className = {styles.dropdown}>
            <div className={styles.flexRow}>
                <h1>Fiabilité</h1>
                <div className = {styles.icon}><ShowIcon fill='white' onClick={handleClick(1)}/></div>
            </div>
            {isShown1 && <Text content='Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.' />}
        </section>
        <section className = {styles.dropdown}>
            <div className={styles.flexRow}>
                <h1>Respect</h1>
                <div className = {styles.icon}><ShowIcon fill='white' onClick={handleClick(2)}/></div>
            </div>
            {isShown2 && <Text content='La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.' />}
        </section>
        <section className = {styles.dropdown}>
            <div className={styles.flexRow}>
                <h1>Service</h1>
                <div className = {styles.icon}><ShowIcon fill='white' onClick={handleClick(3)}/></div>
            </div>
            {isShown3 && <Text content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question." />}
        </section>
        <section className = {styles.dropdown} style={{marginBottom: '200px'}}>
            <div className={styles.flexRow}>
                <h1>Sécurité</h1>
                <div className = {styles.icon}><ShowIcon fill='white' onClick={handleClick(4)}/></div>
            </div>
            {isShown4 && <Text content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." />}
        </section>
        </>
    );
}
export default ProposedPage;

const Text = ({content}) => {
    return (
        <div className={styles.dropdownContent}>
            {content}
        </div>
    )
}
