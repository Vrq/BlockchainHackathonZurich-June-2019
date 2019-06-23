import React from 'react'
import { MDBCol, MDBRow, MDBInput, MDBBtn, MDBContainer } from 'mdbreact';
import Cookies from 'universal-cookie';


class RegisterPage extends React.Component {

    handleFormSubmit = e => {
        e.preventDefault();
        const formData = new FormData(e.target);
        formData.set("timestampLastModified", new Date().toGMTString())
        const SERVER_URL = "http://tk19server-env.pmxnizzw2s.us-east-2.elasticbeanstalk.com"
        const LOCAL_SERVER = "http://localhost:3001"
        fetch(SERVER_URL + '/users/login', {
            method: 'POST',
            body: formData,
        }).then((res) => {
            if(res.ok) {
                console.log("user LOGGED")
                res.json().then(body => {
                    console.log(body.token)
                    const cookies = new Cookies();
                    cookies.set("userToken", body.token)
                    cookies.set("loginEmail", body.user.email)
                    console.log(body)
                    this.props.history.push("/app/upload")
                })
            }
            console.log("User login error")
        })
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
                                    <MDBInput label="Your email" icon="envelope" group type="email" validate error="wrong" success="right" required name="email" />
                                    <MDBInput label="Your password" icon="lock" required group type="password" validate name="password" />
                                </div>
                                <div className="text-center">
                                    <MDBBtn color="primary" type="submit">Log in</MDBBtn>
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
