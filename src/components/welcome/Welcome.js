import React, { Component, Fragment } from 'react';
import FirebaseService from '../../services/firebase';

class Welcome extends Component {
    constructor(props) {
        super(props);

        this.state = {
            categories: []
        }
    }

    componentDidMount() {
        FirebaseService.getCategories((dataReceived) => {
            this.setState({
                categories: dataReceived
            })
        })
    }

    render() {
        return(
            <Fragment>
                <h1>Welcome page</h1>
            </Fragment>
        );
    }

}

export default Welcome;