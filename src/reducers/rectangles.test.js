import rectangles from './rectangles'
import * as types from '../const/ActionTypes'

describe('rectangles reducer', () => {
    it('should handle initial state', () => {
        expect(
            rectangles(undefined, {})
        ).toEqual([{}])
    })

    it('should handle ADD_RECTANGLE', () => {
        expect(
            rectangles([], {
                type      : types.ADD_RECTANGLE,
                properties: {
                    width : 12,
                    height: 13,
                    top   : 14,
                    left  : 15
                }
            })
        ).toEqual([
            {
                width : 12,
                height: 13,
                top   : 14,
                left  : 15
            }
        ])

        expect(
            rectangles([
                {
                    width : 22,
                    height: 23,
                    top   : 24,
                    left  : 25
                }
            ], {
                type      : types.ADD_RECTANGLE,
                properties: {
                    width : 12,
                    height: 13,
                    top   : 14,
                    left  : 15
                }
            })
        ).toEqual([
            {
                width : 12,
                height: 13,
                top   : 14,
                left  : 15
            },
            {
                width : 22,
                height: 23,
                top   : 24,
                left  : 25
            }
        ])
    })

    it('should handle REMOVE_RECTANGLE', () => {
        expect(
            rectangles([{
                    width : 22,
                    height: 23,
                    top   : 24,
                    left  : 25
                }],
                {
                    type : types.REMOVE_RECTANGLE,
                    index: 0
                })).toEqual([])

        expect(
            rectangles([{
                    width : 22,
                    height: 23,
                    top   : 24,
                    left  : 25
                },
                    {
                        width : 33,
                        height: 34,
                        top   : 35,
                        left  : 36
                    },
                    {
                        width : 42,
                        height: 43,
                        top   : 44,
                        left  : 45
                    }],
                {
                    type : types.REMOVE_RECTANGLE,
                    index: 1
                }))
            .toEqual([
                {
                    height: 23,
                    left  : 25,
                    top   : 24,
                    width : 22
                }, {
                    height: 43,
                    left  : 45,
                    top   : 44,
                    width : 42
                }])
    })

    it('should handle REMOVE_ALL_RECTANGLES', () => {
        expect(
            rectangles([{
                    width : 22,
                    height: 23,
                    top   : 24,
                    left  : 25
                },
                    {
                        width : 33,
                        height: 34,
                        top   : 35,
                        left  : 36
                    },
                    {
                        width : 42,
                        height: 43,
                        top   : 44,
                        left  : 45
                    }],
                {
                    type: types.REMOVE_ALL_RECTANGLES
                }))
            .toEqual([]);
    })
})