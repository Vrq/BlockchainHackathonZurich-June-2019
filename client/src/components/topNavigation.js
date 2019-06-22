import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav } from 'mdbreact';
import Cookies from 'universal-cookie';

class TopNavigation extends Component {
    state = {
        collapse: false
    }

    onClick = () => {
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    toggle = () => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        const cookies = new Cookies();
        const email = cookies.get("loginEmail")

        return (
            <MDBNavbar className="flexible-navbar" light expand="md" scrolling>
                <MDBNavbarBrand href="/">
                    <strong>SYNAPSES</strong>
                </MDBNavbarBrand>
                {/* <MDBNavbarToggler onClick={this.onClick} />
                <MDBCollapse isOpen={this.state.collapse} navbar>
                    <MDBNavbarNav left>
                        <MDBNavItem active>
                            <MDBNavLink to="/">Home</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to="/app/register">Create Account</MDBNavLink>
                        </MDBNavItem>
                    </MDBNavbarNav>
                    <MDBNavbarNav right>
                        <MDBNavItem>
                            <a rel="noopener noreferrer" className="nav-link Ripple-parent" href="/there-is-no-page-like-that" target="_blank">External 404 example</a>
                        </MDBNavItem>

                    </MDBNavbarNav>
                </MDBCollapse> */}
                <MDBNavbarNav right>
                    {email &&  <div>You are logged in as: <b>{email}</b></div> }       
                </MDBNavbarNav>
            </MDBNavbar>
        );
    }
}

export default TopNavigation;