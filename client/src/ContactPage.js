import React from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBMask, MDBRow, MDBCol, MDBBtn,  MDBView, MDBContainer, MDBFormInline, MDBCard, MDBCardBody, MDBInput } from "mdbreact";
import "./contact.css";

class ContactPage extends React.Component {
  state = {
    collapseID: ""
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

  render() {
    const overlay = (
  <div id="sidenav-overlay" style={{ backgroundColor: "transparent" }} onClick={this.handleTogglerClick} />
);
    return (
      <div id="contactformpage">
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
                <MDBNavLink to="/Explore">Explore</MDBNavLink>
              </MDBNavItem>
              
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
      {this.state.collapsed && overlay}
    </div>

        <MDBView>
          <MDBMask
            className="d-flex justify-content-center align-items-center gradient">
          >
            <MDBContainer>
              <MDBRow>
                <div className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5">
                  <h1 className="display-4 font-weight-bold">Contact us</h1>
                  <hr className="hr-light" />
                  <h6 className="mb-4">
                      We will be happy to answer your questions. <br />
                      
                      Please, let us know if you have any problems working with our platform. <br />
                      
                      We are grateful for all the feedback you provide. Thank you.
                  </h6>
                  <MDBNavLink to="/Explore"><MDBBtn outline color="white">Learn more</MDBBtn>></MDBNavLink>
                </div>
                <MDBCol md="6" xl="5" className="mb-4">
                  <MDBCard className="dark-grey-text">
                    <MDBCardBody className="z-depth-2">
                      <h3 className="dark-grey-text text-center">
                        <strong>Write to us:</strong>
                      </h3>
                      <hr />
                      <MDBInput label="Your name" icon="user" />
                      <MDBInput label="Your email" icon="envelope" />
                      <MDBInput
                        label="Your message"
                        icon="pencil-alt"
                        type="textarea"
                        rows="3"
                      />
                      <div className="text-center mt-3 black-text">
                        <MDBBtn color="indigo">Send</MDBBtn>
                        
                      </div>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
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

export default ContactPage;
