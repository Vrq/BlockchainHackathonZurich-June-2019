import React from 'react';
import { MDBFooter, MDBIcon } from 'mdbreact';

const Footer = () => {
    return (
        <MDBFooter color="blue" className="text-center font-small darken-2">
            <div className="py-4">
                <MDBIcon fab icon="facebook" className="mr-3"/>
                <MDBIcon fab icon="twitter" className="mr-3"/>
                <MDBIcon fab icon="youtube" className="mr-3"/>
                <MDBIcon fab icon="google-plus" className="mr-3"/>
                <MDBIcon fab icon="dribbble" className="mr-3"/>
                <MDBIcon fab icon="pinterest" className="mr-3"/>
                <MDBIcon fab icon="github" className="mr-3"/>
                <MDBIcon fab icon="codepen" className="mr-3"/>
            </div>
            <p className="footer-copyright mb-0 py-3 text-center">
                &copy; {new Date().getFullYear()} Copyright: <a href="https://github.com/Vrq/SBHack-2019-team-Kuznyechik"> Team Kuznyechik</a>
            </p>
        </MDBFooter>
    );
}

export default Footer;