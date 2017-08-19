import * as actions from './actions';
import * as types from '../const/ActionTypes';

describe('Rectangle actions', () => {
    it('addTodo should create ADD_RECTANGLE action', () => {
        expect(actions.addRectangle({})).toEqual({
            type      : types.ADD_RECTANGLE,
            properties: {}
        })
    })

    it('removeRectangle should create REMOVE_RECTANGLE action with correct index', () => {
        expect(actions.removeRectangle(1)).toEqual({
            type: types.REMOVE_RECTANGLE,
            index: 1
        })
    })

    it('removeAllRectangles should create REMOVE_ALL_RECTANGLES action', () => {
        expect(actions.removeAllRectangles()).toEqual({
            type: types.REMOVE_ALL_RECTANGLES
        })
    })
});