import React from 'react'

import './TechnologyInfoButton.css';


const TechnologyInfoButton = ({ onRouteChange, route }) => {
    return <div className="TechnologyInfoButtonContainer"> <img className="TechnologyInfoButton" onClick={() => onRouteChange(route)} src="/images/code.png"></img></div>
}

export default TechnologyInfoButton;