import React from 'react'

import './ImprintButton.css';
import { IMPRINT_ROUTE } from '../../../constants';


const ImprintButton = ({ onRouteChange }) => {
    return <div className="ImprintButtonContainer"> <img className="ImprintButton" onClick={() => onRouteChange(IMPRINT_ROUTE)} src="/images/imprint.png"></img> </div>
}

export default ImprintButton;