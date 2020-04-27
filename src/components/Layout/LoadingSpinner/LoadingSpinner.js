import React from 'react'

import './LoadingSpinner.css';


const LoadingSpinner = ({ swapiLabel }) => {
    return (
        <div className="loadingContainer">
            <div className="circleLoading"></div>
            {
                swapiLabel &&
                <p className="morePeopleLoading">catching 'em all</p>
            }
        </div>
    );
}

export default LoadingSpinner;
