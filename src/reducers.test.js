import {
    CHANGE_SEARCH_FIELD,
    REQUEST_PEOPLE_PENDING,
    REQUEST_PEOPLE_SUCCESS,
    REQUEST_PEOPLE_FAILED
} from './constants'       //get constants form constants file


import * as reducers from './reducers';     //import all reducers in the reducers file

describe('searchRobots', () => {
    const initialStateSearch = {
        searchField: ''
    }
    it('should return the initial state', () => {
        expect(reducers.searchRobots(undefined, {})).toEqual({ searchField: '' });
    })

    it('should handle CHANGE_SEARCHFIELD', () => {
        expect(reducers.searchRobots(initialStateSearch, {
            type: CHANGE_SEARCH_FIELD,
            payload: 'abc'
        })).toEqual({ searchField: 'abc' });
    })
})

describe('requestRobots', () => {
    const initialStateRobots = {
        robots: [],
        isPending: false,
        error: ''
    }
    it('should return the initial state', () => {
        expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots);
    })

    it('should handle REQUEST_PEOPLE_PENDING', () => {
        expect(reducers.requestRobots(initialStateRobots, {
            type: REQUEST_PEOPLE_PENDING
        })).toEqual({ robots: [], isPending: true, error: '' });
    })

    it('should handle REQUEST_PEOPLE_SUCCESS', () => {
        expect(reducers.requestRobots(initialStateRobots, {
            type: REQUEST_PEOPLE_SUCCESS,
            payload: [{
                id: '123',
                name: 'test',
                email: 'test@gmail.com'
            }]
        })).toEqual({
            robots: [{
                id: '123',
                name: 'test',
                email: 'test@gmail.com'
            }], isPending: false, error: ''
        });
    })

    it('should handle REQUEST_PEOPLE_FAILED', () => {
        expect(reducers.requestRobots(initialStateRobots, {
            type: REQUEST_PEOPLE_FAILED,
            payload: 'NOOO!'
        })).toEqual({
            robots: [], isPending: false, error: 'NOOO!'
        });
    })
})