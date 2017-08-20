import React from 'react';
import {shallow} from 'enzyme';


import ReactDOM from 'react-dom';
import AddButton from './Button';

describe('Add Button', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<AddButton/>, div);
    });

    it('has correct className', () => {
        const wrapper = shallow(<AddButton type="btn-primary"/>);
        expect(wrapper.hasClass('btn btn-primary')).toEqual(true);
    });

    it('has correct label', () => {
        const wrapper = shallow(<AddButton type="btn-primary" label="Button Label"/>);
        expect(wrapper.text()).toEqual('Button Label');
    })

    it('has correct onClick action', () => {
        let testNumber = 0;

        function makeShortAction() {
            testNumber = testNumber + 1;
        }

        const wrapper = shallow(<AddButton onClickAction={makeShortAction}/>)
        wrapper.find('button').simulate('click');

        expect(testNumber).toEqual(1);
    })
});
