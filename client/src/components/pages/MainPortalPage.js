import React from 'react'
import { MDBCol, MDBRow, MDBNavLink, MDBBtn, MDBContainer } from 'mdbreact';
import Cookies from 'universal-cookie';


class RegisterPage extends React.Component {

    handleFormSubmit = e => {
        e.preventDefault();
        const formData = new FormData(e.target);
        formData.set("timestampLastModified", new Date().toGMTString())
        const SERVER_URL = "http://tk19server-env.pmxnizzw2s.us-east-2.elasticbeanstalk.com"
        const LOCAL_SERVER = "http://localhost:3001"
        fetch(LOCAL_SERVER + '/users/login', {
            method: 'POST',
            body: formData,
        }).then((res) => {
            console.log("user LOGGED")
            res.json().then(body => {
                console.log(body.token)
                const cookies = new Cookies();
                cookies.set("userToken", body.token)
                this.props.history.push("/app/main")
            })
        })
            .catch(() => console.log("error"))
    };

    render() {
        const cookies = new Cookies();
        const token = cookies.get("userToken")
        return (
            <React.Fragment>
                <MDBContainer>
                    <MDBRow className="justify-content-center">
                        <MDBCol className="col-6 text-center">
                          {
                              token ? 
                              <div>
                                  <div>You do not have any stuff</div>
                                  <MDBNavLink to="/app/upload"><MDBBtn >Create stuff</MDBBtn></MDBNavLink>
                              </div> 
                              : 
                              <div>You need to login to access this page</div>
                          }
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </React.Fragment>
        )
    }
}

export default RegisterPage;
