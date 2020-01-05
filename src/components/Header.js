import React, { Component } from 'react';

class Header extends Component {
    shouldComponentUpdate(nextProps, nextState) {       //the lifecycle hook gives us the ability to restrict the updating of a component    
        return false;                                   //never update this component! 
    }
    render() {
        return <h1 className="f1">Star Wars Characters</h1>;
    }
}

export default Header;