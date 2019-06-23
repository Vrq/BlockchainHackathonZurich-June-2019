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
                <MDBNavLink to="/">Explore</MDBNavLink>
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
              <h2><br /></h2>
              <h2>Try now easy ways to benefit from using SYNAPSES: </h2>
              <h2>get valuations of your asset or </h2>
              <h2>provide valuations to the assets of others to be rewarded</h2><br /><br />
              <h2>With the wisdom of the crowd and ETH smart contracts </h2>
              <h2>we provide the most accurate valuations for any type of asset </h2>
              <h2>and reward valuators incentivizing valuation creation.
        </h2>
              <MDBNavLink to="/"><MDBBtn outline color="white">Start using</MDBBtn>></MDBNavLink>
            </MDBMask>
  </MDBView>

  <MDBContainer>
    <MDBRow className="py-5">
      <MDBCol md="12" className="text-center">
        <p>
          With the wisdom of the crowd and ETH smart contracts we provide the most accurate valuations for any type of asset (data, multimedia, expertise, physical entities) and reward valuators incentivizing valuation creation.
        </p>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
</div>
);
}
}

export default AboutPage;
