import React from 'react';
import {shallow} from 'enzyme';

import ReactDOM from 'react-dom';
import Rectangle from '../components/Rectangle/Rectangle';

describe('Rectangle', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Rectangle/>, div);
    });

    it('has correct className', () => {
        const wrapper = shallow(<Rectangle/>);
        expect(wrapper.hasClass('rectangle')).toEqual(true);
    });
});
