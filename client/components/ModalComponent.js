import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// We need to have a div in the index.html with an id that we will want to target
const modalRoot = document.getElementById('modal');

class ModalComponent extends Component {
    constructor(props) {
        super(props);

        // We create a div that we will use to render
        this.element = document.createElement('div');
    }

    componentDidMount() {
        // When the component mounts, we will append it to the DOM in the div we chose
        modalRoot.appendChild(this.element);
    }

    componentWillUnmount() {
        // When the component unmounts, we remove element from the DOM
        modalRoot.removeChild(this.element);
    }

    render() {
        // We render the children into the element by using a Portal
        return ReactDOM.createPortal(
            this.props.children,
            this.element,
        );
    }
}

export default ModalComponent;