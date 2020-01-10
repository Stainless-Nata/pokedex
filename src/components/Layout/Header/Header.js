import React, { Component } from 'react';

import './Header.css';
import { INITIAL_ROUTE } from '../../../constants';


class Header extends Component {
    shouldComponentUpdate(nextProps, nextState) {       //the lifecycle hook gives us the ability to restrict the updating of a component    
        return false;                                   //never update this component! 
    }
    render() {
        const { onRouteChange } = this.props;
        return <h1 className="header f1" onClick={() => onRouteChange(INITIAL_ROUTE)}>Star Wars Characters</h1>;
    }
}

export default Header;