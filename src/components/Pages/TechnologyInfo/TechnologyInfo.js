import React from 'react'

import './TechnologyInfo.css';


const TechnologyInfo = () => {
    return (
        <div className="TechnologyInfo tc dib br3 pa3 ma2 bw2 shadow-5">
            <h3>This page uses data of </h3>
            <a href="https://swapi.co" target="_blank" rel="noopener noreferrer">swapi.co</a>
            <p>(The API itself is not reliable and fast, that's why multiple stages of loading and visual loading spinners have been implemented)</p>
            <br />
            <h3>This page was built with </h3>
            <p>React.js, React-lazy, Redux, Redux-Thunk, Tachyons</p>
            <br />
            <h3>Tested with</h3>
            <p>Jest</p>
            <br />
            <h3>This page is mobile responsive! Go and check it out <span aria-label="phone-emoji" role="img">📲</span></h3>{/**
            <h3>Special technologies used</h3>
            <p>PWA<br />This page is a Progressive Web App, <br />which means it caches data locally and enables users <br />to work without any internet connection 🤓 <br /><br />Go and check it out on your own!</p>
             */}

        </div>);
}

export default TechnologyInfo;
