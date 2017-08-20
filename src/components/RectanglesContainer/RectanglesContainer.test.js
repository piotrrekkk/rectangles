import React from 'react';
import {shallow} from 'enzyme';
import RectanglesContainer from './RectanglesContainer';


describe('RectanglesContainer', () => {

    it('renders empty container', () => {
        let rectanglesArray = [];
        const wrapper = shallow(<RectanglesContainer rectangles={rectanglesArray}/>);
        expect(wrapper.find('Rectangle').length).toEqual(0);
    })

    it('renders 1 rectangle', () => {
        let rectanglesArray = [{
            width : '20vw',
            height: '20vh',
            top   : '20px',
            left  : '20px'
        }];
        const wrapper = shallow(<RectanglesContainer rectangles={rectanglesArray}/>);
        expect(wrapper.find('Rectangle').length).toEqual(1);
    });

    it('renders 5 rectangles', () => {
        let rectanglesArray = [
            {width: '20vw', height: '20vh', top: '20px', left: '20px'},
            {width: '20vw', height: '20vh', top: '20px', left: '20px'},
            {width: '20vw', height: '20vh', top: '20px', left: '20px'},
            {width: '20vw', height: '20vh', top: '20px', left: '20px'},
            {width: '20vw', height: '20vh', top: '20px', left: '20px'}
        ];
        const wrapper = shallow(<RectanglesContainer rectangles={rectanglesArray}/>);
        expect(wrapper.find('Rectangle').length).toEqual(5);
    });

});
