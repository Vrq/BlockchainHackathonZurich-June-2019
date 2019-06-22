import React from "react";
import { MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBMask,
MDBRow, MDBCol, MDBBtn, MDBView, MDBContainer } from "mdbreact";
import "./landing.css";

class LandingPage extends React.Component {
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
              
			
              <MDBNavItem>
                <MDBNavLink to="/About">About</MDBNavLink>
              </MDBNavItem>
              
              <MDBNavItem>
                <MDBNavLink to="/contact">Contact</MDBNavLink>
              </MDBNavItem>
              
              <MDBNavItem>
                <MDBNavLink to="/app/login">Explore</MDBNavLink>
              </MDBNavItem>
              
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
      {this.state.collapsed && overlay}
    </div>
  
  <MDBView>
    <MDBMask className="d-flex justify-content-center align-items-center gradient">
      <MDBContainer>
        <MDBRow>
          <div className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5">
            
            <h2 className="h2-responsive font-weight-bold mt-sm-4">
              Get valuations of your asset or provide valuations and be rewarded{" "}
            </h2><br /><br />
            
            
            <h1 className="h1-responsive font-weight-bold mt-sm-5">
              SYNAPSES{" "}
            </h1>
            <hr className="hr-light" />
            <h6 className="mb-4">
              Universal marketplace to incentivize value creation
            </h6>
            
		
			<MDBNavLink to="/app/login"><MDBBtn outline color="white">Login</MDBBtn></MDBNavLink>
			
			<MDBNavLink to="/app/register"><MDBBtn outline color="white">Sign up</MDBBtn>></MDBNavLink>
			
          </div>
        </MDBRow>
      </MDBContainer>
    </MDBMask>
  </MDBView>

  <MDBContainer>
    <MDBRow className="py-5">
      <MDBCol md="12" className="text-center">
        <p>
          With the wisdom of the crowd and ETH smart-contracts we provide the most accurate valuations for any type of asset (data, multimedia, expertise, physical entities) <br />
          and reward valuators incentivizing valuation creation. 
        </p>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
</div>
);
}
}

export default LandingPage;
