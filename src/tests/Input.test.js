import React from 'react';
import {shallow} from 'enzyme';

import ReactDOM from 'react-dom';
import Input from '../components/Form/Input';

describe('Rectangle', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Input label="Name"/>, div);
    });

    it('has correct "Name" in label', () => {
        const wrapper = shallow(<Input label="Name"/>);
        expect(wrapper.find('label').contains('Name')).toEqual(true);
    });

    it('has correct "Name" in placeholder', () => {
        const wrapper = shallow(<Input label="Name"/>);
        expect(wrapper.find('input').props()).toEqual({"className": "form-control", "placeholder": "Name", "type": "text"});
    });
});
