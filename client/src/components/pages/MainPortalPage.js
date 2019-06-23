import React from 'react'
import { MDBCol, MDBRow, MDBNavLink, MDBBtn, MDBContainer, MDBInput } from 'mdbreact';
import Cookies from 'universal-cookie';


class MainPortalPage extends React.Component {

    componentDidMount() {
        const cookies = new Cookies();
        const SERVER_URL = "http://tk19server-env.pmxnizzw2s.us-east-2.elasticbeanstalk.com"
        const LOCAL_SERVER = "http://localhost:3001"
        fetch(SERVER_URL + '/users/me', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + cookies.get("userToken")
            }
        }).then((res) => {
            if (res.ok) {
                console.log("Successfully loaded user data")
                res.json().then(userData => {
                    // userData should contain the file names and hashes
                });
            }
        })
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
                                        {/* <form onSubmit={this.handleUpload}>
                                            <div className="grey-text">
                                                <MDBInput required group type="file" name="upl" />
                                            </div>
                                            <div className="text-center">
                                                <MDBBtn color="primary" type="submit">Upload</MDBBtn>
                                            </div>
                                        </form> */}
                                    </div>
                                    :
                                    <div>
                                        <div>You need to login to access this page</div>
                                        <MDBNavLink to="/app/login"><MDBBtn>Log in</MDBBtn></MDBNavLink>
                                    </div>
                            }
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </React.Fragment>
        )
    }
}

export default MainPortalPage;
