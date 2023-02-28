import React from 'react';
import Logement from '../components/Logement';
import data from '../data/data.js'
import { useParams, Navigate } from 'react-router-dom';

const LogementPage = () => {
    const id = useParams().id;
    const logement = data.find(i => {return i.id === id})

    return (
        <>
        {logement === undefined && <Navigate to="/error" replace={true} />}
        {logement !== undefined && <Logement logement={logement} />}
        </>
    )  
}

export default LogementPage;