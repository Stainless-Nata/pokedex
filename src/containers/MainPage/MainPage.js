import React, { Component, Suspense, lazy, Fragment } from 'react';   //destructuring (instead of React.Component)

import {
    HEADER_ROUTE,
    IMPRINT_ROUTE,
    TECHNOLOGYINFO_ROUTE
} from '../../constants'       //get constants form constants file

import CardList from '../../components/CardList';
import SearchBox from '../../components/SearchBox';
import Scroll from '../../components/Scroll';
import ErrorBoundry from '../../components/ErrorBoundry';
import Header from '../../components/Layout/Header/Header';
import LoadingSpinner from '../../components/Layout/LoadingSpinner/LoadingSpinner';
import TechnologyInfoButton from '../../components/Layout/TechnologyInfoButton/TechnologyInfoButton';


import './MainPage.css'; //to import the appropriate css file for this component
import ImprintButton from '../../components/Layout/ImprintButton/ImprintButton';


const AsyncPageTechnologyInfo = lazy(() => import('../../components/Pages/TechnologyInfo/TechnologyInfo'));
const AsyncPageImprint = lazy(() => import('../../components/Pages/Imprint/Imprint'));

class MainPage extends Component {   //class App will use the component lib / Component expects that there is a render function in this class

    constructor() {
        super();
        this.state = {
            route: 'main'
        };

    }
    onRouteChange = (route) => {
        this.setState({ route: route });
    }
    getRouteComponent = (route, onSearchChange, firstPeoplePending, morePeoplePending) => {

        if (route === 'main') {
            return (
                <Fragment>
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
                </Fragment>
            )
        } else if (route === IMPRINT_ROUTE) {
            return (
                <Suspense fallback={< div > Loading...</div >}>
                    <AsyncPageImprint />
                </Suspense>
            )
        } else if (route === TECHNOLOGYINFO_ROUTE) {
            return (
                <Suspense fallback={< div > Loading...</div >}>
                    <AsyncPageTechnologyInfo />
                </Suspense>
            )
        }
    }

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
        let page;
        page = this.getRouteComponent(this.state.route, onSearchChange, firstPeoplePending, morePeoplePending);
        return (
            <div className='tc' >
                <div className='wrapper'>
                    <Header onRouteChange={this.onRouteChange} route={HEADER_ROUTE} />
                    {page}
                </div>
                <TechnologyInfoButton onRouteChange={this.onRouteChange} route={TECHNOLOGYINFO_ROUTE} />
                <ImprintButton onRouteChange={this.onRouteChange} route={IMPRINT_ROUTE} />
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