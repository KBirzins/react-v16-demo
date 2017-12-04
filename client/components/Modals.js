import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Gist from 'react-gists'

import ModalComponent from './ModalComponent';

class Modals extends Component {
    constructor(props) {
        super(props);
        this.state = { showModal: false };

        this.renderModal = this.renderModal.bind(this);
        this.handleModalHide = this.handleModalHide.bind(this);
        this.handleModalShow = this.handleModalShow.bind(this);
    }

    handleModalHide() {
        this.setState({ showModal: false });
        console.log('Set showModal to false, Modal should be HIDDEN now');
    }

    handleModalShow() {
        this.setState({ showModal: true });
        console.log('Set showModal to true, Modal should be SHOWN now');
    }

    renderModal() {
        // We check state to see, if modal should be displayed
        console.log(this.state.showModal);

        return this.state.showModal ? (
            <ModalComponent>
                <div className="col-md-3" style={{ position: 'fixed', backgroundColor: 'rgba(0,0,0,0.4)', height: '100%', width: '100%', display: 'flex', top: 0, left: 0, alignItems: 'center', justifyContent: 'center' }}>
                    <div>
                        <p>This is a portal, that got shown in a different div.</p>
                        <p>Click the button to remove it.</p>
                        <p>
                            <Button bsStyle="success" onClick={this.handleModalHide}>Hide modal</Button>
                        </p>
                    </div>
                </div>
            </ModalComponent>    
        ) : null;
    }

    render() {
        return (
            <div>
                <div className="col-md-6">
                    <h3>In React v16, it is possible to create tooltips, modals etc, by using Portals.</h3>
                    <p>Check the code below to see how we can create a new component using portals, and check the source code how to implement the modal!</p>
                    <Gist id="8d81f4c0d32d26dc7a8d8937c976af08" />
                </div>
                <div className="col-md-3">
                    <p>Here you can see a simple example of Modals in action.</p>
                    <p>If you inspect the elements, you can see that there is a empty div with the id of modal.</p>
                    <p>After pressing the button, the component is inserted in this empty div, and on close it is removed.</p>
                    <p>Usually in React, a component is mounted as a child of the parent node.</p>
                    <p>Using portals it is now easy to create things like tooltips, dialogs, modals etc.</p>
                    <Button block bsStyle="primary" onClick={this.handleModalShow}>Show modal</Button>
                    <Button block onClick={() => this.props.history.push('/')} >Back</Button>
                </div>
                {this.renderModal()}
            </div>
        );
    }
}

export default Modals;