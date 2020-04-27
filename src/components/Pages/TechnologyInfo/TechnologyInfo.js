import React from 'react'

import './TechnologyInfo.css';
import Scroll from '../../Layout/Scroll/Scroll';

const TechnologyInfo = () => {
    return (
        <div className="TechnologyInfo">
            <Scroll>
                <h3>This page uses GraphQL data of </h3>
                <a href="https://graphql-pokemon.now.sh/" target="_blank" rel="noopener noreferrer">https://graphql-pokemon.now.sh/</a>
                <br />
                <br />

                <p>All the rights for the used Pokemon images are stated here:</p>
                <a href="https://pokemondb.net/about#privacy" target="_blank" rel="noopener noreferrer">https://pokemondb.net/about#privacy</a>
                <br />
                <br />
                <br />
                <h3>This page was built with </h3>
                <p>React.js, React-lazy, Redux, Redux-Thunk, React-Relay (by Facebook), GraphQL</p>
                <br />
                {/*<h3>Tested with</h3>
                <p>Jest</p>
                <br />
                <h3>This page is mobile responsive! Go and check it out <span aria-label="phone-emoji" role="img">📲</span></h3>*
            <h3>Special technologies used</h3>
            <p>PWA<br />This page is a Progressive Web App, <br />which means it caches data locally and enables users <br />to work without any internet connection 🤓 <br /><br />Go and check it out on your own!</p>
             */}
            </Scroll>
        </div>);
}

export default TechnologyInfo;
