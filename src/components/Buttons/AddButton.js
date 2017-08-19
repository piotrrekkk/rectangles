import React from 'react';

const AddButton = (props) => {
    return (
        <button className={`btn ${props.type}`} onClick={props.action}>{props.label}</button>
    )
};

export default AddButton;