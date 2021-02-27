import React, { useState, useCallback, useEffect } from 'react';
import { Switch, Route } from 'react-router';
import { HashRouter } from 'react-router-dom';

/* eslint-disable */
import ErrorPage from '../pages/error';
/* eslint-enable */

import useLocalStorage from '../actions/useLocalStorage';

import '../styles/theme.scss';
import LayoutComponent from '../components/Layout';
import IncidenceList from "../pages/incidence_list/IncidenceList";
import HospitalList from "../pages/hospital_list/HospitalList";
import Charts from '../pages/charts_exemple/Charts';
import LocationContext from '../contexts/LocationContext'
import axios from 'axios'


function App(props) {


    const [LatLng, setLatLng] = useState({lat: null, lng: null});
    const [location, setLocation] = useState('UNKNOWN')
    const [storageMode, setStorageMode] = useLocalStorage('theme','plague');

    const handleChangeMode = useCallback(
        (e) => {
            //setDarkMode(modeValue);
            setStorageMode(e);
            document.documentElement.style.setProperty('--current-gradient', `var(--${e}-gradient)`)
            document.documentElement.style.setProperty('--bg-current',`var(--bg-custom-${e})`)
        },
        [setStorageMode],
    );

    const findUserLocation = () => {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const lat = position.coords.latitude;
                const lng = position.coords.longitude;
                setLatLng({lat: lat, lng: lng});
                axios.get(`https://api-adresse.data.gouv.fr/reverse/?lon=${lng}&lat=${lat}`).then(data => {
                    const info = data.data.features;
                    if(info.length > 0) {
                        setLocation(`${info[0].properties.postcode}`)
                    } else {
                       setLocation('Unkwonw')
                    }
                })
            });
        } else {
            axios.get('http://ip-api.com/json').then(data => {
                setLatLng({lat: data.data.lat, lng: data.data.lon})
                setLocation(data.data.zip)
            })
        }
    }

    useEffect(()=>{
        document.documentElement.style.setProperty('--current-gradient', `var(--${storageMode}-gradient)`)
        document.documentElement.style.setProperty('--bg-current',`var(--bg-custom-${storageMode})`)
        if(window.matchMedia('(prefers-color-scheme: dark)').matches){
            setStorageMode('dark')
        }
    },[])

    useEffect(() => {
        findUserLocation()
    }, [])

    
    return (
        <div>
            <HashRouter>
                <Switch>
                    <Route path="/" exact component={LayoutComponent} />
                    <Route path="/hospital/list" exact component={HospitalList}/>
                    <Route path="/incidence/list" exact component={IncidenceList}/>
                    <Route path="/charts" exact component={Charts} />
                    <Route path="/error" exact component={ErrorPage}/>
                    <Route component={ErrorPage}/>
                    
                </Switch>
            </HashRouter>
        </div>

    );
}


export default App;
