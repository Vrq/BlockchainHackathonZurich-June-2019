import React from 'react';
import { Route } from 'react-router-dom';
import StartPage from './pages/StartPage';
import AboutPage from './pages/AboutPage';
import DashboardPage from './pages/DashboardPage';
import ProfilePage from './pages/ProfilePage';
import MetamaskPage from './pages/MetamaskPage';
import ItemsPage from './pages/ItemsPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import SubmitPage from './pages/SubmitPage';
import UploadPage from './pages/UploadPage';
import MainPortalPage from './pages/MainPortalPage';


class Routes extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Route path='/app/start' component={StartPage} />
        <Route path='/app/about' component={AboutPage} />
        <Route path='/app/register' component={RegisterPage} />
        <Route path='/app/login' component={LoginPage} />
        <Route path='/app/dashboard' component={DashboardPage} />
        <Route path='/app/items' component={ItemsPage} />
        <Route path='/app/profile' component={ProfilePage} />
        <Route path='/app/metamask' component={MetamaskPage} />
        <Route path='/app/submitData' component={SubmitPage} />
        <Route path='/app/upload' component={UploadPage} />
        <Route path='/app/main' component={MainPortalPage} />
      </React.Fragment>
    );
  }
}

export default Routes;
