import React from 'react'
import { MDBCol, MDBRow, MDBInput, MDBBtn } from 'mdbreact';


class RegisterPage extends React.Component {

    handleFormSubmit = e => {
        e.preventDefault();
        const formData = new FormData(e.target);
        formData.set("timestampLastModified", new Date().toGMTString())
        fetch('http://tk19server-env.pmxnizzw2s.us-east-2.elasticbeanstalk.com/users', {
            method: 'POST',
            body: formData,
        }).then(() => console.log("user created"))
            .catch(() => console.log("error"))
    };

    render() {
        return (
            <React.Fragment>
                <div className="full">
                    <MDBRow>
                        <MDBCol className="col-6">
                            <form onSubmit={this.handleFormSubmit}>
                                <p className="h5 text-center mb-4">Sign up</p>
                                <div className="grey-text">
                                    <MDBInput label="Your name" required icon="user" group type="text" name="name"/>
                                    <MDBInput label="Your email" icon="envelope" group type="email" validate error="wrong" success="right" required name="email"/>
                                    <MDBInput label="Your password" icon="lock" required group type="password" validate name="password"/>
                                </div>
                                <div className="text-center">
                                    <MDBBtn color="primary" type="submit">Register</MDBBtn>
                                </div>
                            </form>
                        </MDBCol>
                    </MDBRow>
                </div>
            </React.Fragment>
        )
    }
}

export default RegisterPage;