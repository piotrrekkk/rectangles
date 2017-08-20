import React from 'react';

class Input extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }

    handleChange(e) {
        this.props.handleChange(e.target.value);

    }

    render() {
        return (
            <div className="form-group">
                <label className="col-sm-4 control-label">{this.props.label}:</label>
                <div className="col-sm-8">
                    <input
                        type="number"
                        className="form-control"
                        placeholder={this.props.label}
                        onChange={this.handleChange.bind(this)}/>
                </div>
            </div>

        )
    }
}

export default Input;