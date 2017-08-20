import React from 'react';
import {shallow} from 'enzyme';

import ReactDOM from 'react-dom';
import Input from './Input';

describe('Input', () => {
    it('has correct "Name" in label', () => {
        const wrapper = shallow(<Input label="Name"/>);
        expect(wrapper.find('label').contains('Name')).toEqual(true);
    });

    it('has correct "Name" in placeholder', () => {
        const wrapper = shallow(<Input label="Name"/>);
        expect(wrapper.find('input').props().placeholder).toEqual('Name');
    });

    it('catch change event', () => {
        let inputHasChanged = false;

        function handleChange() {
            inputHasChanged = true;
        }

        const wrapper = shallow(<Input label="Name" onClick={handleChange}/>);
        wrapper.find('input').simulate('click');

        expect(inputHasChanged).toBe(true)

    })
});
