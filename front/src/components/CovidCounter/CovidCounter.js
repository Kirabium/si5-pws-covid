
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
        return new Promise((resolve, reject) => {
            axios.get(URL).then((data) => {
                //console.log('FROM SERVER', data.data.FranceGlobalLiveData);
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
        //console.log('INIT COUNTER');
        //console.log('SEARCHING FOR A NEW VALUE')
        updateCounter();

        interval = setInterval(() => {
            //console.log('REFRESHING THE COUNTER...')
            updateCounter();
        }, refreshTime) // Refresh counter

        return () => {
            //console.log('CLEANING UP THE INTERVAL')
            clearInterval(interval);
        } // Clean the interval before the component is re-render
    })

    return (
        <div className="covid-counter">
            <p className="count">Nombre de décès : <span id="deathCounter">{deathCounter !==0 ? deathCounter : 'Chargement...'}</span></p>
            <p className="count">Nombre de personnes hospitalisé : <span id="hospitalCounter">{hospitalCounter !==0 ? hospitalCounter : 'Chargement...'}</span></p>
        </div>
    );
}

export default CovidCounter;
