import * as React from 'react';
import AddButton from '../Buttons/AddButton';

const Header = (props) => {
    return (
        <div className="page-header">
            <AddButton addRectangle={props.addRectangle}/>
        </div>
    )
};

export default Header;