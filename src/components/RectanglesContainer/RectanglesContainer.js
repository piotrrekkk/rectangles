import * as React from 'react';

import Rectangle from '../Rectangle/Rectangle';
import './style.css';

class RectanglesContainer extends React.Component {


    getRectangles() {
        return (this.props.rectangles.map((rectangle, index) => {
            return <Rectangle key={index} properties={rectangle}/>
        }))
    }

    render() {
        return (
            <div className='container-fluid'>
                {this.getRectangles()}
            </div>
        )
    }
}

export default RectanglesContainer;


