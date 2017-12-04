import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Gist from 'react-gists'

import ButtonComponent from './ButtonComponent';
import ErrorBoundary from './ErrorBoundary';
import ErrorBoundaryDifferent from './ErrorBoundaryDifferent';
import ErrorBoundaryRecover from './ErrorBoundaryRecover';

class Errors extends Component {
    render() {
        return (
            <div>
                <div className="col-md-6">
                <h3>In React v16, it is now possible to create Error boundaries with a new lifecycle method - componentDidCatch(error, info). See the code and check how it works for yourself!</h3>
                <Gist id="d40cb14a2e9b767056e302d7dd9cfc38" />
                </div>
                <div className="col-md-3">
                    <ButtonComponent buttonName={"Unhandled Error"} displayText={"Click me for an unhandled error."} />
                    <ErrorBoundary>
                        <ButtonComponent buttonName={"Handled Error"} displayText ={"Click me for an handled error."} />
                    </ErrorBoundary>
                    <ErrorBoundaryDifferent>
                        <ButtonComponent buttonName={"Handled Error 2"} displayText={"Click me for a different handled error."} />
                    </ErrorBoundaryDifferent>
                    <ErrorBoundaryRecover>
                        <ButtonComponent buttonName={"Logged Error"} displayText={"Click me for a logged error, that recovers."} />
                    </ErrorBoundaryRecover>
                    <Button block onClick={() => this.props.history.push('/')} >Back</Button>
                </div>
            </div>
        );
    }
}

export default Errors;