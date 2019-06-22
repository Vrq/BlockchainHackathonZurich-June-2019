import React from 'react'
import { MDBCol, MDBRow, MDBNavLink, MDBBtn, MDBContainer, MDBInput } from 'mdbreact';
import Cookies from 'universal-cookie';


class MainPortalPage extends React.Component {

    handleUpload = e => {
        e.preventDefault();
        const formData = new FormData(e.target);
        formData.set("timestampLastModified", new Date().toGMTString())
        const cookies = new Cookies();
        formData.set("token", cookies.get("userToken"))
        const SERVER_URL = "http://tk19server-env.pmxnizzw2s.us-east-2.elasticbeanstalk.com"
        const LOCAL_SERVER = "http://localhost:3001"
        fetch(LOCAL_SERVER + '/users/me/upload', {
            method: 'POST',
            body: formData,
        }).then((res) => {
            if (res.ok) {
                console.log("Successfully uploaded")
            } else {
                console.log("failed to upload")
            }
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
