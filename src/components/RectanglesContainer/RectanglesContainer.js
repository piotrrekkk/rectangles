import * as React from 'react';

import Rectangle from '../Rectangle/Rectangle';
import './style.css';

/**
 * @interface rectangleStyle
 {
     width : 'cssProperty',
     height: 'cssProperty',
     top   : 'cssProperty',
     left  : 'cssProperty'
 }
 */

class RectanglesContainer extends React.Component {


    getRectangles() {
        return (this.props.rectangles.map((rectangle, index) => {
            return <Rectangle key={index} properties={rectangle}/>
        }))
    }

    render() {
        console.log(this.getRectangles())
        return (
            <div className='container-fluid'>
                {this.getRectangles()}
            </div>
        )
    }
}

export default RectanglesContainer;


