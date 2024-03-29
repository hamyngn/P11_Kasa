import * as React from 'react';
import Collapse from '../components/Collapse';
import proposedImage from '../assets/images/a-propose.png'
import styles from '../assets/styles/Proposed.module.css';

const ProposedPage = () => {
    return (
        <>
        <img className={styles.header} src={proposedImage} alt='Cover'></img>
        <Collapse
        styles={styles}
        title='Fiabilité'
        content = 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.'
        />
        <Collapse 
        styles={styles}
        title='Respect'
        content = 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
        />
        <Collapse 
        styles={styles}
        title='Service'
        content = "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
        />
        <Collapse 
        styles={styles}
        style={{marginBottom: '200px'}}
        title='Sécurité'
        content = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        />
        </>
    );
}
export default ProposedPage;


