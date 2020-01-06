import React from 'react'

import './LoadingSpinner.css';


const LoadingSpinner = () => {
    return (
        <div className="loadingContainer">
            <div className="circleLoading"></div>
            <p className="morePeopleLoading">fetching from swapi.co</p>
        </div>
    );
}

export default LoadingSpinner;
