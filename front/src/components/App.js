import React, { useState, useCallback, useEffect } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router';
import { HashRouter } from 'react-router-dom';

/* eslint-disable */
import ErrorPage from '../pages/error';
/* eslint-enable */

import useLocalStorage from '../actions/useLocalStorage';

import '../styles/theme.scss';
import LayoutComponent from '../components/Layout';
import LocationContext from '../contexts/LocationContext'
import axios from 'axios'

const PrivateRoute = ({component, ...rest }) => {

    return ( // eslint-disable-line
        <Route {...rest} render={props => (React.createElement(component, props))}/>
    );
    
};

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
            handleChangeMode('dark')
        }
    },[])

    useEffect(() => {
        findUserLocation()
    }, [])

    
    return (
        <LocationContext.Provider value={ {LatLng, location, setLatLng, setLocation} } >
            <div>
                <HashRouter>
                    <Switch>
                        <Route path="/" exact render={() => <Redirect to="/app"/>}/>
                        <PrivateRoute path="/app" component={()=><LayoutComponent mode={storageMode} onchange={handleChangeMode}/>}/>
                        <Route path="/error" exact component={ErrorPage}/>
                        <Route component={ErrorPage}/>
                        <Redirect from="*" to="/app/dashboard"/>
                    </Switch>
                </HashRouter>
            </div>
        </LocationContext.Provider>

    );
}

export default connect()(App);
