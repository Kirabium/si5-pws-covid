import React from 'react';
import { Switch, Route } from 'react-router';
import { HashRouter } from 'react-router-dom';

/* eslint-disable */
import ErrorPage from '../pages/error';
/* eslint-enable */

import '../styles/theme.scss';
import LayoutComponent from '../components/Layout';
import Charts from '../pages/charts_exemple/Charts';

class App extends React.PureComponent {
  render() {
    return (
        <div>
            <HashRouter>
                <Switch>
                    <Route path="/" exact component={LayoutComponent} />
                    <Route path="/charts" exact component={Charts} />
                    <Route path="/error" exact component={ErrorPage}/>
                    <Route component={ErrorPage}/>
                    
                </Switch>
            </HashRouter>
        </div>

    );
  }
}


export default App;
