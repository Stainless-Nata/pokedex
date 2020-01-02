import React, { Component } from 'react';   //destructuring (instead of React.Component)

import CardList from '../CardList';
import SearchBox from '../SearchBox';
import Scroll from '../Scroll';
import ErrorBoundry from '../ErrorBoundry';
import Header from '../Header';
import './MainPage.css'; //to import the appropriate css file for this component


class MainPage extends Component {   //class App will use the component lib / Component expects that there is a render function in this class

    componentDidMount() {
        this.props.onRequestPeople();
    }
    filterPeople = () => {
        return this.props.people.filter(person => {      //filter the people and return them to filteredpeople
            return person.name.toLowerCase().includes(this.props.searchField.toLowerCase());
        });
    }

    render() {
        const { onSearchChange, isPending } = this.props;

        return isPending ?  //return html back depending on the isPending flag
            <h1 className='tc'>Loading</h1>
            :
            <div className='tc' >
                <Header />
                <SearchBox searchChange={onSearchChange} />
                <Scroll>
                    <ErrorBoundry>
                        <CardList people={this.filterPeople()} />
                    </ErrorBoundry>
                </Scroll>
            </div>
    }
}
export default MainPage;

//connect is a higher order function - will return another function -> that's why it is written that way above
//
//connect() is subscribed to the redux store now and it accepts 2 params: 
//1st is mapStateToProps: what state the component is interested in
//2nd is mapDispatchToProps: 