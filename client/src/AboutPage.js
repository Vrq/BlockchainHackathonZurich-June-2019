import React from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBMask,
MDBRow, MDBCol, MDBBtn, MDBView, MDBContainer } from "mdbreact";
import "./landing.css";

class AboutPage extends React.Component {
state = {
  collapsed: false
};

handleTogglerClick = () => {
this.setState({
  collapsed: !this.state.collapsed
});
};

render() {
const overlay = (
  <div id="sidenav-overlay" style={{ backgroundColor: "transparent" }} onClick={this.handleTogglerClick} />
);
return (
<div id="apppage">
    <div>
      <MDBNavbar color="primary-color" dark expand="md" fixed="top" scrolling transparent>
        <MDBContainer>
          <MDBNavbarToggler onClick={this.handleTogglerClick} />
          <MDBCollapse isOpen={this.state.collapsed} navbar>
            <MDBNavbarNav left>
              <MDBNavItem active>
                <MDBNavLink to="/about">About</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/contact">Contact</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="#!">Explore</MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
      {this.state.collapsed && overlay}
    </div>
    
  <MDBView>
    <MDBMask className="flex-center flex-column text-white text-center gradient">
              <h1>SYNAPSES</h1>
              <h2>Here demand meets solutions.</h2>
              <h5>Try now easy ways to benefit from using SYNAPSES: </h5>
              <h5>send a request for asset you need OR submit asset to fulful demand</h5><br />
              <h5>We use ETH smart-contracts to bring together anyone who wants to sell any type of asset 
              (data, multimedia, expertise, physical entities) with whose who need these assets.
        </h5>
              
            </MDBMask>
  </MDBView>

  <MDBContainer>
    <MDBRow className="py-5">
      <MDBCol md="12" className="text-center">
        <p>
          We use ETH smart-contracts to bring together anyone who wants to sell any type of asset (data, multimedia, expertise, physical entities) with whose who need these assets.
        </p>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
</div>
);
}
}

export default AboutPage;
