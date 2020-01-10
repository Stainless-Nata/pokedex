import React, { Component } from 'react';   //destructuring (instead of React.Component)
import { connect } from 'react-redux';
import MainPage from './MainPage/MainPage'

import { setSearchField, requestPeople } from '../actions'

const mapStateToProps = state => {
    return {
        searchField: state.searchPeople.searchField,            //prop searchfield will get the state of the searchPeople.searchField
        firstPeoplePending: state.requestPeople.firstPeoplePending,               // -''-
        morePeoplePending: state.requestPeople.morePeoplePending,
        people: state.requestPeople.people                      // -''-
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        //onSearchChange is a function which will pass the event to it's inner 
        //there the dispatch will get called which will call the setSearchField action in redux and 
        //it will hand over the event.target.value (which is the stuff typed in the search box)
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestPeople: () => dispatch(requestPeople())                    //requestPeople needs the dispatch function
    }
}

class App extends Component {   //only the react 
    render() {
        return <MainPage {...this.props} />
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);

//connect is a higher order function - will return another function -> that's why it is written that way above
//
//connect() is subscribed to the redux store now and it accepts 2 params: 
//1st is mapStateToProps: what state the component is interested in
//2nd is mapDispatchToProps: 