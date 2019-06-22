import React, { Component } from 'react';
import './index.css';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Dashboard from './Dashboard'

import LandingPage from './LandingPage'
import AboutPage from './AboutPage'
import ContactPage from './ContactPage'
import ExplorePage from './ExplorePage'

class App extends Component {

  render() {
    return (
      <div className="flexible-content">
        <div>
          <Router>
            <Switch>
              <Route exact path='/' component={LandingPage} />
              <Route exact path='/about' component={AboutPage} />
              <Route exact path='/contact' component={ContactPage} />
              <Route exact path='/explore' component={ExplorePage} />
              <Route path='/app' component={Dashboard} />
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
