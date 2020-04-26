import {
    INITIAL_ROUTE,
    CHANGE_SEARCH_FIELD,
    CHANGE_EXPANDED,
    CHANGE_ROUTE
} from './constants'       //get constants form constants file






/**
 * CHANGEROUTE REDUCER
 */


//define the initialstate in the reducer 
const initialRoute = {
    route: INITIAL_ROUTE         //initial object in the redux store
}

//searchPeople function -> use default params (initialState, empty action object)
//reducers get a input of a state and action -> if this one get something we care about (like searching people), we will do something
export const changeRoute = (state = initialRoute, action = {}) => {
    switch (action.type) {
        case CHANGE_ROUTE:       //if a CHANGE_SEARCH_FIELD action comes in, we will do something
            return Object.assign({}, state, { route: action.payload })
        //1st param= new object
        //2nd param= state we receiving
        //3rd param=is what we want to change in the state
        //so what we return is a new object with everything in the state + new searchField -> 2nd principle: State is read only
        default:
            return state    //if a other action comes in, return the state as it was passed over and do not change anything
    }
}




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
 * CHANGEROUTE REDUCER
 */


//define the initialstate in the reducer 
const initialExpanded = {
    id: undefined,
};

//searchPeople function -> use default params (initialState, empty action object)
//reducers get a input of a state and action -> if this one get something we care about (like searching people), we will do something
export const changeExpanded = (state = initialExpanded, action = {}) => {
    switch (action.type) {
        case CHANGE_EXPANDED:       //if a CHANGE_SEARCH_FIELD action comes in, we will do something
            return Object.assign({}, state, { id: action.payload })
        //1st param= new object
        //2nd param= state we receiving
        //3rd param=is what we want to change in the state
        //so what we return is a new object with everything in the state + new searchField -> 2nd principle: State is read only
        default:
            return state    //if a other action comes in, return the state as it was passed over and do not change anything
    }
}