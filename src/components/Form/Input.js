import React from 'react';

class Input extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }

    handleChange(e) {
        if(!e) return;
        this.setState({
            value: e.target.value
        });
    }

    render() {
        return (
            <div className="form-group">
                <label htmlFor="input" className="col-sm-2 control-label">{this.props.label}:</label>
                <div className="col-sm-10">
                    <input
                        type="text"
                        className="form-control"
                        placeholder={this.props.label}
                        onClick={this.handleChange.bind(this)}/>
                </div>
            </div>

        )
    }
}

export default Input;