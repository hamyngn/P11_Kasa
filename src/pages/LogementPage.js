import React, {useState} from 'react';
import Logement from '../components/Logement';
import data from '../data/data.js'
import { useParams, Navigate } from 'react-router-dom';

const LogementPage = () => {
    const id = useParams().id;
    const [isError, setError] = useState(false)
    
    const logement = data.find(i => {return i.id === id})
    if(logement === undefined) {
        setError (true)
    }
    return (
        <>
        {isError && <Navigate to="/error" replace={true} />}
        <Logement logement={logement} />
        </>
    )  
}

export default LogementPage;