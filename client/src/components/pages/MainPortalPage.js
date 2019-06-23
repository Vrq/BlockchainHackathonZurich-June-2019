import React from 'react'
import { MDBCol, MDBRow, MDBNavLink, MDBBtn, MDBContainer, MDBCardTitle, MDBCard, MDBCardImage, MDBCardBody, MDBCardText } from 'mdbreact';
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
                        <MDBCol className="col-4 text-center">
                            {
                                token ?
                                    <div>
                                        <div>
                                            <MDBCard >
                                                <div className="d-flex justify-content-center">
                                                <MDBCardImage className="img-fluid w-75 pl-5 ml-3 pt-5" src="https://sbhack19-prod.s3.eu-central-1.amazonaws.com/public-resources/broccoli.png" waves />

                                                </div>
                                                <MDBCardBody>
                                                    <MDBCardTitle>The Broccoli</MDBCardTitle>
                                                    <MDBCardText className="py-4"><i>A unique piece of art, simply outstanding ~ Jean Marie</i></MDBCardText>
                                                    <MDBCardText className="py-2"><i>OWNNERSHIP PROOVEN DIGITALLY: #52323d3d32jkddLDaASda233</i></MDBCardText>
                                                </MDBCardBody>
                                            </MDBCard>
                                        </div>
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
