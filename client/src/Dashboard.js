import React, { Component } from 'react';
import Routes from './components/Routes';
import TopNavigation from './components/topNavigation';
import SideNavigation from './components/sideNavigation';
import Footer from './components/Footer';
import './index.css';

class Dashboard extends Component {

  render() {
    return (
      <div className="flexible-content ">
        <TopNavigation />
        <SideNavigation />
        <main id="content" className="p-5 min-height-900">
          <Routes />
        </main>
        <Footer />
      </div>
    );
  }
}

export default Dashboard;