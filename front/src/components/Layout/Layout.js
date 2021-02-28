import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Switch, Route, withRouter, Redirect} from 'react-router';

import Charts from '../../pages/charts_exemple/Charts';
import Dashboard from '../../pages/dashboard';

import Header from '../Header';
import Sidebar from '../Sidebar';
import s from './Layout.module.scss';
import IncidenceList from "../../pages/incidence_list";
import HospitalList from "../../pages/hospital_list";
import ContactForm from "../../pages/contact_form/ContactForm";

class Layout extends React.Component {
    static propTypes = {
        sidebarStatic: PropTypes.bool,
        sidebarOpened: PropTypes.bool,
        mode: PropTypes.string,
    };

    static defaultProps = {
        sidebarStatic: false,
        sidebarOpened: false,
    };

    render() {
        return (
            <div
                className={[
                    s.root,
                    'sidebar-' + this.props.sidebarPosition,
                    'sidebar-' + this.props.sidebarVisibility,
                ].join(' ')}
            >
                <div className={s.wrap}>
                    <Header onchange={this.props.onchange} mode={this.props.mode}/>
                    <Sidebar/>
                    <main className={s.content}>
                        <Switch>
                            <Route path="/app" exact render={() => <Redirect to="/app/dashboard"/>}/>
                            <Route path="/app/dashboard" exact component={() => <Dashboard mode={this.props.mode}
                                                                                           localisation={this.props.localisation}/>}/>
                            <Route path="/app/hospital/list" exact
                                   component={() => <HospitalList mode={this.props.mode}/>}/>
                            <Route path="/app/incidence/list" exact
                                   component={() => <IncidenceList mode={this.props.mode}/>}/>
                            <Route path="/app/contact" exact component={() => <ContactForm mode={this.props.mode}/>}/>
                        </Switch>
                        <footer className={s.contentFooter}>
                            Dashboard de visualisation des données du covid du groupe DFGH
                        </footer>
                    </main>
                </div>
            </div>
        );
    }
}

function mapStateToProps(store) {
    return {
        sidebarOpened: store.navigation.sidebarOpened,
        sidebarPosition: store.navigation.sidebarPosition,
        sidebarVisibility: store.navigation.sidebarVisibility,
    };
}

export default withRouter(connect(mapStateToProps)(Layout));
