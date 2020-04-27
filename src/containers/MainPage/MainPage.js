import React, { Component, Suspense, lazy, Fragment } from 'react';   //destructuring (instead of React.Component)

import {
    INITIAL_ROUTE,
    IMPRINT_ROUTE,
    TECHNOLOGYINFO_ROUTE
} from '../../constants'       //get constants form constants file

import CardList from '../../components/CardList';
import SearchBox from '../../components/SearchBox';
import Scroll from '../../components/Scroll';
import ErrorBoundry from '../../components/ErrorBoundry';
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
            searchBoxInput: "",
            scrollContainer: React.createRef(),
            searchBoxRef: React.createRef(),
        }

    }

    setSearchChange = (searchBoxInput) => {
        this.setState({ searchBoxInput: searchBoxInput });
    }

    getRouteComponent = (route) => {

        if (route === INITIAL_ROUTE) {
            return (
                <Fragment>
                    <SearchBox searchBoxRef={this.state.searchBoxRef} searchBoxInput={this.state.searchBoxInput} setSearchChange={this.setSearchChange} />
                    <Scroll scrollContainer={this.state.scrollContainer}>
                        <ErrorBoundry>
                            {
                                <CardList searchBoxRef={this.state.searchBoxRef} searchBoxInput={this.state.searchBoxInput} setSearchChange={this.setSearchChange} />
                            }
                        </ErrorBoundry>
                    </Scroll>
                </Fragment>
            )
        } else if (route === IMPRINT_ROUTE) {
            return (
                <Suspense fallback={<LoadingSpinner swapiLabel={false} />}>
                    <AsyncPageImprint />
                </Suspense>
            )
        } else if (route === TECHNOLOGYINFO_ROUTE) {
            return (
                <Suspense fallback={<LoadingSpinner swapiLabel={false} />}>
                    <AsyncPageTechnologyInfo />
                </Suspense>
            )
        }
    }

    render() {
        const { route, onRouteChange } = this.props;
        let page = this.getRouteComponent(route);

        const setInitialRoute = () => {
            (route !== INITIAL_ROUTE) && onRouteChange(INITIAL_ROUTE);
        }

        return (
            <>
                <div className='wrapper'>
                    <div className='main'>
                        {page}
                        <img onClick={() => setInitialRoute()} alt='pokeball' className={`pokeball ` + ((route !== INITIAL_ROUTE) ? `pokeballHover` : ``)} src="images/pokeball_grey.png" />
                    </div>
                </div>
                <TechnologyInfoButton onRouteChange={onRouteChange} />
                <ImprintButton onRouteChange={onRouteChange} />
            </>
        )
    }
}
export default MainPage;
