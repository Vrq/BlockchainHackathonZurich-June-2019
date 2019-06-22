import React from 'react';
import { MDBCol, MDBRow, MDBInput, MDBBtn } from 'mdbreact';

class StartPage extends React.Component {
    constructor(props){
        super(props)
        this.foo = this.foo.bind(this);

    }
    componentDidMount() {
        console.log("this gets called once when the component is first renered - you can do POST/GET other stuff here")
    }

    foo() {
      console.log('click')
    }

    render() {
        return (
            <div>
                <MDBBtn color="primary" onClick={this.foo}>Test</MDBBtn>
            </div>
        );
    }
}

export default StartPage;


