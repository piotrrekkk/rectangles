import React from 'react';
import './style.css';

class Rectangle extends React.Component {

    render() {
        return (
            <div className='rectangle'
                 style={this.props.properties}></div>
        )
    }
}

export default Rectangle;