import {
    CHANGE_SEARCH_FIELD,
    CHANGE_EXPANDED,
    CHANGE_ROUTE
} from './constants'       //get constants form constants file


//first action in here - this action will receive input of text which the user types - it will return a object with type and payload
//this action will send the object on to the reducer
export const setRoute = (route) => ({
    type: CHANGE_ROUTE,                  //constants are usually capitalized - we use a variable here to avoid misspelling 
    payload: route
})



//first action in here - this action will receive input of text which the user types - it will return a object with type and payload
//this action will send the object on to the reducer
export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,                  //constants are usually capitalized - we use a variable here to avoid misspelling 
    payload: text
})


export const setExpanded = (id) => ({
    type: CHANGE_EXPANDED,                  //constants are usually capitalized - we use a variable here to avoid misspelling 
    payload: id
})

