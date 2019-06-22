import React from 'react';

class StartPage extends React.Component {
    componentDidMount() {
        console.log("this gets called once when the component is first renered - you can do POST/GET other stuff here")
    }

    render() {
        return (
            <div>
                Empty metamask page
            </div>
        );
    }
}

export default StartPage;


