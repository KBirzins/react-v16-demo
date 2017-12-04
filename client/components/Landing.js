import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Landing extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="col-md-12">
                <h3>Welcome to this quick guide on some of the new features in React v16.</h3>
                <p>Select a link to see the implementation and the feature in action!</p>
                <div>
                    <Link to={'/errors'}>Errors</Link>
                </div>
                <div>
                    <Link to={'/portals'}>Portals</Link>
                </div>
                <div>
                    <Link to={'/fragments'}>Fragments</Link>
                </div>
            </div>
        );
    }
}

export default Landing;