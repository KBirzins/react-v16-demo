import React, { Component, Fragment } from 'react';
import { Button } from 'react-bootstrap';
import Gist from 'react-gists'


class Fragments extends Component {
    constructor(props) {
        super();
        this.renderArray = this.renderArray.bind(this);
        this.renderString = this.renderString.bind(this);
        this.renderFragment = this.renderFragment.bind(this);
    }

    renderArray() {
        return [
            <li key="1">A</li>,
            <li key="2">B</li>,
            <li key="3">C</li>,
          ];
    }

    renderString() {
        return 'No other elements needed!'; 
    }

    renderFragment() {
        return (
            <Fragment>
                We have some text here
                <h3>A heading here</h3>
                Some more text.
                <h2>A different heading</h2>
                And some more...
          </Fragment>
        );
    }

    render() {
        return (
            <div>
                <div className="col-md-5">
                    <h3>Arrays and Strings</h3>
                    <p>With the release of React v16, you can now have arrays and strings as a return method from render():</p>
                    {this.renderArray()}
                    {this.renderString()}
                    <Gist id="2663e2b25087e480f19b0317312ebbec" />
                    <div className="col-md-6">
                        <Button block onClick={() => this.props.history.push('/')} >Back</Button>
                    </div> 
                </div>
                <div className="col-md-5">
                    <h3>Fragments</h3>
                    <p>There are now also included Fragments, so you can wrap your child elements:</p>
                    {this.renderFragment()}
                    <Gist id="68ab899eb51e485dd6f569fc832471e3" />   
                </div>
            </div>
        );
    }
}

export default Fragments;