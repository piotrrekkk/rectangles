import {ADD_RECTANGLE, REMOVE_ALL_RECTANGLES, REMOVE_RECTANGLE} from '../const/ActionTypes';

const initialState = [{
    width : '20vw',
    height: '20vh',
    top   : '20px',
    left  : '20px'
}];

export default function rectangles(state = initialState, action) {

    switch( action.type ) {
        case ADD_RECTANGLE:
            return [
                {
                    width : action.properties.width,
                    height: action.properties.height,
                    top   : action.properties.top,
                    left  : action.properties.left
                },
                ...state
            ]

        case REMOVE_RECTANGLE:
            return [
                ...state.slice(0, action.index),
                ...state.slice(action.index + 1)
            ]

        case REMOVE_ALL_RECTANGLES:
            return []

        default:
            return state;
    }
}