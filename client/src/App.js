import React, { Component } from 'react';
import './index.css';
import { Route, Switch } from 'react-router-dom';
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
          <Route path='/' exact component={LandingPage} />
          <Route path='/about' exact component={AboutPage} />
          <Route path='/contact' exact component={ContactPage} />
          <Route path='/explore' exact component={ExplorePage} />
          
          <Route path='/app' component={Dashboard} />
        </div>
      </div>
    );
  }
}

export default App;
