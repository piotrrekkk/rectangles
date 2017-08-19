import React from 'react';

const Input = (props) => {
    return (
        <div className="form-group">
            <label htmlFor="input" className="col-sm-2 control-label">{props.label}:</label>
            <div className="col-sm-10">
                <input type="text" className="form-control" placeholder={props.label}/>
            </div>
        </div>

    )
};

export default Input;