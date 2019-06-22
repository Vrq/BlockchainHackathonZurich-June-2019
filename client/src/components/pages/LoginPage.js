import React from 'react'
import { MDBCol, MDBRow, MDBInput, MDBBtn, MDBContainer } from 'mdbreact';


class RegisterPage extends React.Component {

    handleFormSubmit = e => {
        e.preventDefault();
        const formData = new FormData(e.target);
        formData.set("timestampLastModified", new Date().toGMTString())
        fetch('http://tk19server-env.pmxnizzw2s.us-east-2.elasticbeanstalk.com/users/login', {
            method: 'POST',
            body: formData,
        }).then(() => console.log("user created"))
            .catch(() => console.log("error"))
    };

    render() {
        return (
            <React.Fragment>
                <MDBContainer>
                    <MDBRow className="justify-content-center">
                        <MDBCol className="col-6">
                            <form onSubmit={this.handleFormSubmit}>
                                <p className="h5 text-center mb-4">Login</p>
                                <div className="grey-text">
                                    <MDBInput label="Your email" icon="envelope" group type="email" validate error="wrong" success="right" required name="email"/>
                                    <MDBInput label="Your password" icon="lock" required group type="password" validate name="password"/>
                                </div>
                                <div className="text-center">
                                    <MDBBtn color="primary" type="submit">Login</MDBBtn>
                                </div>
                            </form>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </React.Fragment>
        )
    }
}

export default RegisterPage;
