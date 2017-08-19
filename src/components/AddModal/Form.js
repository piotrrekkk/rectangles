import React from 'react';
import Input from '../Form/Input';

class ModalForm extends React.Component {

    render() {
        return (
            <form className="form-horizontal">
                <Input label="Width" />
                <Input label="Height" />
            </form>
        )
    }
}

export default ModalForm;