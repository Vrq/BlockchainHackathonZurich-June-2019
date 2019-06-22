import React from 'react';
import { MDBRow, MDBContainer, MDBCol } from 'mdbreact';
import ReactDOM from "react-dom";

class StartPage extends React.Component {
  render() {
    return (
      <MDBContainer className="mt-5">
        <MDBRow>
          <MDBCol md="20">
            <img src="https://sbhack19-prod.s3.eu-central-1.amazonaws.com/public-resources/landing.jpg"  className="img-fluid" alt="" />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default StartPage;


