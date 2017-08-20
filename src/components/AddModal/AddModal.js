import React from 'react';
import ModalForm from './Form';

class AddModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    handleWidthChange(value) {
        this.setState({
            width: value + 'px'
        });
    };

    handleHeightChange(value) {
        this.setState({
            height: value + 'px'
        });
    };

    handleLeftPositionChange(value) {
        this.setState({
            left: value + 'px'
        });
    };

    handleTopPositionChange(value) {
        this.setState({
            top: value + 'px',
        });
    };

    submit() {

        this.props.onSubmitAction({
            width : this.state.width,
            height: this.state.height,
            left  : this.state.left,
            top   : this.state.top
        })
    }

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
                            <ModalForm
                                handleWidthChange={this.handleWidthChange.bind(this)}
                                handleHeightChange={this.handleHeightChange.bind(this)}
                                handleLeftPositionChange={this.handleLeftPositionChange.bind(this)}
                                handleTopPositionChange={this.handleTopPositionChange.bind(this)}
                            />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal"
                                    onClick={this.props.closeModal}>Close
                            </button>
                            <button type="button" className="btn btn-primary" onClick={this.submit.bind(this)}>Save
                                changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>)
    }
}

export default AddModal;