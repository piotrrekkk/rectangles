import React from 'react';

const AddButton = (props) => {
    return (
        <button
            className={`btn ${props.type}`}
            disabled={props.disabled}
            onClick={props.onClickAction}>{props.label}</button>
    )
};

export default AddButton;