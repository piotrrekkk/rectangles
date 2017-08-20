import * as React from 'react';
import AddButton from '../Buttons/Button';
import Limit from '../Limit/Limit';

const Header = (props) => {
    return (
        <div className="page-header">
            <AddButton
                onClickAction={props.addRectangleModal}
                label="Add rectangle"
                type="btn-primary"
                disabled={props.rectangles.length > 5}/>
            <AddButton
                onClickAction={props.removeAllRectangles}
                label="Remove all rectangles"
                type="btn-warning"/>

            <Limit rectangles={props.rectangles}/>
        </div>
    )
};

export default Header;