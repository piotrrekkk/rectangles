import * as types from '../const/ActionTypes';

export const addRectangle = (properties) => ({type: types.ADD_RECTANGLE, properties})
export const removeRectangle = (index) => ({type: types.REMOVE_RECTANGLE, index})
export const removeAllRectangles = () => ({type: types.REMOVE_ALL_RECTANGLES})