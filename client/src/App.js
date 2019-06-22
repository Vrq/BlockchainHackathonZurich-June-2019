import React, { Component } from 'react';
import './index.css';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './Dashboard'
import LandingPage from './LandingPage'

class App extends Component {

  render() {
    return (
      <div className="flexible-content">
        <Switch>
          <Route path='/' exact component={LandingPage} />
          <Route path='/dashboard' component={Dashboard} />
        </Switch>
      </div>
    );
  }
}

export default App;
