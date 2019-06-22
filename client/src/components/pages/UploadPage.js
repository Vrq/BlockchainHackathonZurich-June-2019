import React from 'react';
import Web3 from 'web3'
import * as constants from "../../constants";

import { MDBCol, MDBRow, MDBInput, MDBBtn } from 'mdbreact';

class UploadPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = { account: '' }
        this.loadBlockchainData = this.loadBlockchainData.bind(this);
    }

    componentWillMount() {
        this.loadBlockchainData()
    }

    async loadBlockchainData() {
        window.addEventListener('load', async () => {
            // Modern dapp browsers...
            if (window.ethereum) {
                window.web3 = new Web3(window.ethereum);
                try {
                    // Request account access if needed
                    await window.ethereum.enable();
                    // Acccounts now exposed
                    web3.eth.sendTransaction({/* ... */});
                } catch (error) {
                    // User denied account access...
                }
            }
            // Legacy dapp browsers...
            else if (window.web3) {
                window.web3 = new Web3(web3.currentProvider);
                // Acccounts always exposed
                web3.eth.sendTransaction({/* ... */});
            }
            // Non-dapp browsers...
            else {
                console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
        }
        }); 
        let web3 = new Web3(window.web3.currentProvider); 
        let accounts = await web3.eth.getAccounts();
        console.log(accounts)
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


