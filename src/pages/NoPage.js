import * as React from 'react';
import styles from '../assets/styles/NoPage.module.css'
import {Link} from 'react-router-dom';

const NoPage = () => {
    const string = "Retourner sur la page d’accueil";
    return (
        <div className={styles.container}>
            <span className={styles.error}>404</span>
            <span className={styles.message}>Oups! La page que vous demandez n'existe pas.</span>
            <Link to='/' className={styles.return}> {string} </Link>
        </div>
    );
}
export default NoPage;