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
        let numberOfChanges = 0;

        function handleChange() {
            numberOfChanges++;
        }

        const wrapper = shallow(<Input label="Name" handleChange={handleChange}/>);
        wrapper.find('input').simulate('change', {
            target: {
                value: 'value'
            }
        });
        wrapper.find('input').simulate('change', {
            target: {
                value: 'value'
            }
        });
        expect(numberOfChanges).toBe(2)

    })
});
