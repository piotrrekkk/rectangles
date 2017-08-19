import React from 'react';
import ModalForm from './Form';

class AddModal extends React.Component {

    render() {
        return (
            <div className="modal show" tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"
                                    onClick={this.props.closeModal}
                            ><span
                                aria-hidden="true">&times;</span></button>
                            <h4 className="modal-title">Add new rectangle</h4>
                        </div>
                        <div className="modal-body">
                            <ModalForm/>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal"
                                    onClick={this.props.closeModal}>Close
                            </button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>)
    }
}

export default AddModal;