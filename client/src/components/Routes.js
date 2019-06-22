import React from 'react';
import { Route, Switch } from 'react-router-dom';
import StartPage from './pages/StartPage';
import AboutPage from './pages/AboutPage';
import DashboardPage from './pages/DashboardPage';
import ProfilePage from './pages/ProfilePage';
import TablesPage from './pages/TablesPage';
import MapsPage from './pages/MapsPage';
import NotFoundPage from './pages/NotFoundPage';
import ItemsPage from './pages/ItemsPage';


class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path='/' exact component={DashboardPage} />
        <Route path='/start' component={StartPage} />
        <Route path='/about' component={AboutPage} />
        <Route path='/dashboard' component={DashboardPage} />
        <Route path='/items' component={ItemsPage} />
        <Route path='/profile' component={ProfilePage} />
        <Route path='/tables' component={TablesPage} />
        <Route path='/maps' component={MapsPage} />
        <Route path='/404' component={NotFoundPage} />
      </Switch>
    );
  }
}

export default Routes;
