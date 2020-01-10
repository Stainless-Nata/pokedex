import React from 'react'

import './LoadingSpinner.css';


const LoadingSpinner = () => {
    return (
        <div className="loadingContainer">
            <div className="circleLoading"></div>
            <span className="morePeopleLoading">fetching from <a href="https://swapi.co" target="_blank" rel="noopener noreferrer">swapi.co</a></span>
        </div>
    );
}

export default LoadingSpinner;
