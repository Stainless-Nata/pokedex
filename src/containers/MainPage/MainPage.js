import React, { Component, Suspense, lazy } from 'react';   //destructuring (instead of React.Component)

import CardList from '../../components/CardList';
import SearchBox from '../../components/SearchBox';
import Scroll from '../../components/Scroll';
import ErrorBoundry from '../../components/ErrorBoundry';
import Header from '../../components/Header';
import LoadingSpinner from '../../components/Layout/LoadingSpinner/LoadingSpinner';
import TechnologyInfoButton from '../../components/Layout/TechnologyInfoButton/TechnologyInfoButton';


import './MainPage.css'; //to import the appropriate css file for this component
import ImprintButton from '../../components/Layout/ImprintButton/ImprintButton';


const AsyncPageTechnologyInfo = lazy(() => import('../../components/Pages/TechnologyInfo/TechnologyInfo'));
const AsyncPageImprint = lazy(() => import('../../components/Pages/Imprint/Imprint'));

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
        const { onSearchChange, firstPeoplePending, morePeoplePending } = this.props;

        return (
            <div className='tc' >
                <div className='wrapper'>
                    <Header />
                    <SearchBox searchChange={onSearchChange} />
                    <Scroll>
                        <ErrorBoundry>
                            {firstPeoplePending ?  //return html back depending on the isPending flag
                                <LoadingSpinner />
                                :
                                <CardList people={this.filterPeople()} morePeoplePending={morePeoplePending} />
                            }
                        </ErrorBoundry>
                    </Scroll>
                </div>
                <TechnologyInfoButton />
                <ImprintButton />
            </div>
        )
    }
}
export default MainPage;

//connect is a higher order function - will return another function -> that's why it is written that way above
//
//connect() is subscribed to the redux store now and it accepts 2 params: 
//1st is mapStateToProps: what state the component is interested in
//2nd is mapDispatchToProps: 