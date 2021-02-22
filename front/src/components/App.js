import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router';
import { HashRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

/* eslint-disable */
import ErrorPage from '../pages/error';
/* eslint-enable */

import '../styles/theme.scss';
import LayoutComponent from '../components/Layout';
import Login from '../pages/login';
import Register from '../pages/register';
import { logoutUser } from '../actions/user';
import CovidCounter from './CovidCounter/CovidCounter';
import LocationContext from '../contexts/LocationContext'

const PrivateRoute = ({dispatch, component, ...rest }) => {
    if (!Login.isAuthenticated(JSON.parse(localStorage.getItem('authenticated')))) {
        dispatch(logoutUser());
        return (<Redirect to="/login"/>)
    } else {
        return ( // eslint-disable-line
            <Route {...rest} render={props => (React.createElement(component, props))}/>
        );
    }
};

const CloseButton = ({closeToast}) => <i onClick={closeToast} className="la la-close notifications-close"/>


function App(props) {
    const [LatLng, setLatLng] = useState({lat: 0, lng: 0});
    const [location, setLocation] = useState('UNKNOWN')

    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            setLatLng({lat: position.coords.latitude, lng: position.coords.longitude});
        });
    }
  
    return (
        <LocationContext.Provider value={ {LatLng, location, setLatLng, setLocation} } >
            <div>
                <ToastContainer
                    autoClose={5000}
                    hideProgressBar
                    closeButton={<CloseButton/>}
                />
                <CovidCounter></CovidCounter>
                <HashRouter>
                    <Switch>
                        <Route path="/" exact render={() => <Redirect to="/app/main"/>}/>
                        <Route path="/app" exact render={() => <Redirect to="/app/main"/>}/>
                        <PrivateRoute path="/app" dispatch={props.dispatch} component={LayoutComponent}/>
                        <Route path="/register" exact component={Register}/>
                        <Route path="/login" exact component={Login}/>
                        <Route path="/error" exact component={ErrorPage}/>
                        <Route component={ErrorPage}/>
                        <Redirect from="*" to="/app/main/dashboard"/>
                    </Switch>
                </HashRouter>
            </div>
        </LocationContext.Provider>

    );
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(App);
