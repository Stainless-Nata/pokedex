import {
    CHANGE_SEARCH_FIELD,
    REQUEST_PEOPLE_PENDING,
    REQUEST_PEOPLE_SUCCESS,
    REQUEST_PEOPLE_FAILED
} from './constants'       //get constants form constants file



/**
 * SEARCHPEOPLE REDUCER
 */


//define the initialstate in the reducer 
const initialStateSearch = {
    searchField: ''         //initial object in the redux store
}

//searchPeople function -> use default params (initialState, empty action object)
//reducers get a input of a state and action -> if this one get something we care about (like searching people), we will do something
export const searchPeople = (state = initialStateSearch, action = {}) => {
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:       //if a CHANGE_SEARCH_FIELD action comes in, we will do something
            return Object.assign({}, state, { searchField: action.payload })
        //1st param= new object
        //2nd param= state we receiving
        //3rd param=is what we want to change in the state
        //so what we return is a new object with everything in the state + new searchField -> 2nd principle: State is read only
        default:
            return state    //if a other action comes in, return the state as it was passed over and do not change anything
    }
}

/**
 * REQUESTING PEOPLE REDUCER
 */



const initialStatePeople = {
    isPending: false,
    people: [],
    error: ''
}

export const requestPeople = (state = initialStatePeople, action = {}) => {
    switch (action.type) {
        case REQUEST_PEOPLE_PENDING:
            return Object.assign({}, state, { isPending: true })      //everything in the state + new state isPending
        case REQUEST_PEOPLE_SUCCESS:
            return Object.assign({}, state, { people: action.payload, isPending: false })      //everything in the state + new state isPending & people
        case REQUEST_PEOPLE_FAILED:
            return Object.assign({}, state, { isPending: false, error: action.payload })      //everything in the state + errorstate
        default:
            return state
    }
}

