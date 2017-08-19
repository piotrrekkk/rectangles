import * as React from 'react';

import Rectangle from '../Rectangle/Rectangle';
import './style.css';

class RectanglesContainer extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            rectangles: []
        };
    }

    render() {
        return (
            <div className='container-fluid'>
                <Rectangle/>
            </div>
        )
    }
}

export default RectanglesContainer;


/**
 * @interface rectangleStyle
 {
     width : 'cssProperty',
     height: 'cssProperty',
     top   : 'cssProperty',
     left  : 'cssProperty'
 }
 */