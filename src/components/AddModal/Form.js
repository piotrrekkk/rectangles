import React from 'react';
import Input from '../Form/Input';

class ModalForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            'width' : 0 + 'px',
            'height': 0 + 'px',
            'left'  : 0 + 'px',
            'right' : 0 + 'px'
        };
    }


    render() {
        return (
            <form className="form-horizontal">
                <Input label="Width [px]" handleChange={this.props.handleWidthChange.bind(this)} />
                <Input label="Height [px]" handleChange={this.props.handleHeightChange.bind(this)}/>
                <Input label="Left [px]" handleChange={this.props.handleLeftPositionChange.bind(this)}/>
                <Input label="Right [px]" handleChange={this.props.handleTopPositionChange.bind(this)}/>
            </form>
        )
    }
}

export default ModalForm;