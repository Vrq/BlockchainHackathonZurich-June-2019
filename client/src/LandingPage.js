import React from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBMask,
MDBRow, MDBCol, MDBBtn, MDBView, MDBContainer } from "mdbreact";
import "./landing.css";

class LangingPage extends React.Component {
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
          <MDBNavbarBrand>
            <strong className="white-text">SYNAPSES</strong>
          </MDBNavbarBrand>
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
    <MDBMask className="d-flex justify-content-center align-items-center gradient">
      <MDBContainer>
        <MDBRow>
          <div className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5">
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
          We use ETH smart-contracts to bring together anyone who wants to sell any type of asset (data, multimedia, expertise, physical entities) with whose who need these assets.
        </p>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
</div>
);
}
}

export default LangingPage;
