import React from 'react';
import './style.css';

class Rectangle extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rectangleStyle: this.props.rectangleStyle
        }
    }

    render() {
        return (
            <div className='rectangle'
                 style={this.state.rectangleStyle}></div>
        )
    }
}

export default Rectangle;