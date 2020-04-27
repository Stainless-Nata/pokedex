import React from 'react'

import './LoadingSpinner.css';


const LoadingSpinner = ({ swapiLabel }) => {
    return (
        <div className="loadingContainer">
            <div className="circleLoading"></div>
            {
                swapiLabel &&
                <p className="morePeopleLoading">catching them all</p>
            }
        </div>
    );
}

export default LoadingSpinner;
