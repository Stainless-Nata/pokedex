import React from 'react'

import './LoadingSpinner.css';


const LoadingSpinner = ({ swapiLabel }) => {
    return (
        <div className="loadingContainer">
            <div className="circleLoading"></div>
            {
                swapiLabel &&
                <span className="morePeopleLoading">fetching from <a href="https://swapi.co" target="_blank" rel="noopener noreferrer">swapi.co</a></span>
            }
        </div>
    );
}

export default LoadingSpinner;
