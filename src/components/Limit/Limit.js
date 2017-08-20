import * as React from 'react';


const limit = 5;

class Limit extends React.Component {
    constructor(props) {
        super(props);
    }

    getCurrentNumberOfRectangles() {
        return this.props.rectangles.length || 0;
    }

    render() {
        return (
            <div>Number of Rectangles: <span>{this.getCurrentNumberOfRectangles()}/{limit}</span></div>
        )
    }
}

export default Limit;