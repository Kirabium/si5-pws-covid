
import './CovidCounter.scss';

import React, { useEffect, useState } from 'react';

import axios from 'axios';

function CovidCounter() {

    const [counter, setCounter] = useState(0);
    let interval;
    const refreshTime = 3600000; // Represent an hour in milliseconds
    const URL = 'https://coronavirusapi-france.now.sh/FranceLiveGlobalData'

    const getConfirmedCase = () => {
        return new Promise((resolve, reject) => {
            axios.get(URL).then((data) => {
                //console.log('FROM SERVER', data.data.FranceGlobalLiveData[0].casConfirmes);
                resolve(data.data.FranceGlobalLiveData[0].casConfirmes)
            })
        })
    }

    const updateCounter = () => {
        getConfirmedCase().then((data) => {
            setCounter(data)
            console.log('ACTUAL COUNTER', counter)
        })
    }

    useEffect(() => {
        console.log('INIT COUNTER');
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
            Cas Confirmés : <span id="counter">{counter !==0 ? counter : 'Chargement...'}</span>
        </div>
    );
}

export default CovidCounter;
