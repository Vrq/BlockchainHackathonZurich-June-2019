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
import RegisterPage from './pages/RegisterPage';


class Routes extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Route path='/app/start' component={StartPage} />
        <Route path='/app/about' component={AboutPage} />
        <Route path='/app/register' component={RegisterPage} />
        <Route path='/app/dashboard' component={DashboardPage} />
        <Route path='/app/items' component={ItemsPage} />
        <Route path='/app/profile' component={ProfilePage} />
        <Route path='/app/tables' component={TablesPage} />
        <Route path='/app/maps' component={MapsPage} />
        <Route path='/app/404' component={NotFoundPage} />
      </React.Fragment>
    );
  }
}

export default Routes;
