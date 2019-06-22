import React from 'react';
import Web3 from 'web3'

import { MDBCol, MDBRow, MDBInput, MDBBtn } from 'mdbreact';

class UploadPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = { account: '' }
    }

    componentWillMount() {
        this.loadBlockchainData()
    }

    async loadBlockchainData() {
        const web3 = new Web3(Web3.givenProvider || "http://localhost:8545")
        const accounts = await web3.eth.getAccounts()
        this.setState({ account: accounts[0] })
    }

    render() {
        return (
            <div className="container">
                <h1>Hello, World!</h1>
                <p>Your account: {this.state.account}</p>
            </div>
        );
    }
}
export default UploadPage;


