import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class ButtonComponent extends Component {
    constructor(props) {
        super(props);
        this.state= { shouldThrowError: false };
        this.throwError = this.throwError.bind(this);
        this.renderText = this.renderText.bind(this);
    }

    renderText() {
        if (!this.state.shouldThrowError) {
        return (<p style={{ textAlign: "center" }}>{this.props.displayText}</p>);
        }
        // We are returning 'gibberish' to throw an error in render
        return gibberish;
    }

    throwError() {
        this.setState({ shouldThrowError: true });
    }

    render() {
        return (
            <div>
                {this.renderText()}
                <Button block bsStyle="danger" style={{ marginBottom: '20px' }} onClick={ this.throwError }>{this.props.buttonName}</Button>
            </div>
        );
    }
}

export default ButtonComponent;