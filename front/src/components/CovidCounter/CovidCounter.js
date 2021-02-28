
import './CovidCounter.scss';

import React, { useEffect, useState } from 'react';

import axios from 'axios';

function CovidCounter() {

    const [deathCounter, setDeathCounter] = useState(0);
    const [hospitalCounter, setHospitalsCounter] = useState(0);
    let interval;
    const refreshTime = 3600000; // Represent an hour in milliseconds
    const URL = 'https://coronavirusapi-france.now.sh/FranceLiveGlobalData'

    const getCaseData = () => {
        return new Promise((resolve) => {
            axios.get(URL).then((data) => {
                resolve({
                    death: data.data.FranceGlobalLiveData[0].deces,
                    hospital: data.data.FranceGlobalLiveData[0].hospitalises
                })
            })
        })
    }

    const updateCounter = () => {
        getCaseData().then((data) => {
            setDeathCounter(data.death)
            setHospitalsCounter(data.hospital)
        })
    }

    useEffect(() => {
        updateCounter();

        interval = setInterval(() => {
            updateCounter();
        }, refreshTime) // Refresh counter

        return () => { clearInterval(interval); } // Clean the interval before the component is re-render
    }, [deathCounter, hospitalCounter])

    return (
        <div className="covid-counter">
            <p className="count">Nombre de décès en France: <span id="deathCounter">{deathCounter !==0 ? deathCounter : 'Chargement...'}</span></p>
            <p className="count">Nombre de personnes hospitalisé en France : <span id="hospitalCounter">{hospitalCounter !==0 ? hospitalCounter : 'Chargement...'}</span></p>
        </div>
    );
}

export default CovidCounter;
