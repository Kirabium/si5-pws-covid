import React, { useState, useCallback, useEffect } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router';
import { HashRouter } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios'

/* eslint-disable */
import ErrorPage from '../pages/error';
/* eslint-enable */
import LayoutComponent from '../components/Layout';
import LocationContext from '../contexts/LocationContext'
import useLocalStorage from '../actions/useLocalStorage';

import '../styles/theme.scss';


function App(props) {
    const [LatLng, setLatLng] = useState({lat: null, lng: null});
    const [location, setLocation] = useState('Unkwonw')
    const [storageMode, setStorageMode] = useLocalStorage('theme','plague');
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

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
                        setLocation(`${info[0].properties.postcode.substring(0,2)}`)
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
    const handleSwicthDarkMode=()=>{
        handleChangeMode('dark')
        toggle()
        return 
    }

    useEffect(()=>{
        findUserLocation()

        document.documentElement.style.setProperty('--current-gradient', `var(--${storageMode}-gradient)`)
        document.documentElement.style.setProperty('--bg-current',`var(--bg-custom-${storageMode})`)
        if(storageMode!='dark' && window.matchMedia('(prefers-color-scheme: dark)').matches){
            toggle()
        }
    },[])
    
    return (
        <LocationContext.Provider value={ {LatLng, location, setLatLng, setLocation} } >
            {modal? <Modal isOpen={modal} toggle={toggle}>
                    <ModalHeader toggle={toggle}>Dark Mode detection</ModalHeader>
                    <ModalBody>
                        We have detected the use of a dark mode. Do you want to switch the site to dark mode?
                    </ModalBody>
                    <ModalFooter>
                    <Button color="primary" onClick={handleSwicthDarkMode}>Yes</Button>
                    <Button color="danger" onClick={toggle}>No, keep this theme</Button>
                    </ModalFooter>
                </Modal>: null}
            <div>
                <HashRouter>
                    <Switch>
                        <Route path="/" exact render={() => <Redirect to="/app"/>}/>
                        <Route path="/app" component={()=><LayoutComponent mode={storageMode} onchange={handleChangeMode} localisation={location}/>}/>
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
