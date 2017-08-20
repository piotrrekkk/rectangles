import * as React from 'react';
import AddButton from '../Buttons/Button';

const Header = (props) => {
    return (
        <div className="page-header">
            <AddButton
                onClickAction={props.addRectangleModal}
                label="Add rectangle"
                type="btn-primary"/>
            <AddButton
                onClickAction={props.removeAllRectangles}
                label="Remove all rectangles"
                type="btn-warning"/>
        </div>
    )
};

export default Header;