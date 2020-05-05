import React, { Component } from 'react';
import Modal from 'react-modal';

export default class OptionModal extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Modal
                isOpen={!!this.props.selectedOption}
                contentLabel="Example Modal">
                <h3>modal content</h3>
                {this.props.selectedOption && <p>{this.props.selectedOption}</p>}
                <button onClick={this.props.closeActionModal}>close</button>
            </Modal>
        );
    }
}
Modal.setAppElement('#app');