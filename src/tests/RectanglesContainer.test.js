import React from 'react';
import {shallow} from 'enzyme';

import ReactDOM from 'react-dom';
import RectanglesContainer from '../components/RectanglesContainer/RectanglesContainer';

describe('RectanglesContainer', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<RectanglesContainer/>, div);
    });
});
