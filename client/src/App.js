import React, { Component } from 'react';
import './index.css';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './Dashboard'
import LandingPage from './LandingPage'

class App extends Component {

  render() {
    return (
      <div className="flexible-content">
        <div>
          <Route path='/' exact component={LandingPage} />
          <Route path='/app' component={Dashboard} />
        </div>
      </div>
    );
  }
}

export default App;
