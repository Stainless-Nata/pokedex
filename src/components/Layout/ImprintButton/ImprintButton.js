import React from 'react'

import './ImprintButton.css';


const ImprintButton = ({ onRouteChange, route }) => {
    return <div className="ImprintButtonContainer"> <img className="ImprintButton" onClick={() => onRouteChange(route)} src="/images/imprint.png"></img> </div>
}

export default ImprintButton;