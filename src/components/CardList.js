import React, { Fragment } from 'react';
import Card from './Card';
import LoadingSpinner from './Layout/LoadingSpinner/LoadingSpinner'

import './CardList.css';

const CardList = ({ people, morePeoplePending }) => {          //using people array as props
    /*
    if (true) {
        throw new Error('noooo!');          this would throw an error to test the error boundry written in ErrorBoundry.js
    }*/
    return (
        <Fragment>  {/* this fragment is to wrap all returned cards, but will avoid a additional wrap div */}
            {   //wrap in curly brackets cause it's javascript
                /*  people.map((person, i) => {           //for each user in people array
                      return (                        //return of the map function 
                          <Card
                              key={i}
                              id={i}
                              name={person.name}
                              height={person.height}
                              mass={person.mass}
                              birth_year={person.birth_year}
                              species={person.species}
                          />);
                  })*/
                <div className="noapiOutter">
                    <div className="noapiContainer">
                        <p>Unfortunately the API <a href="https://swapi.co" target="_blank" rel="noopener noreferrer">swapi.co</a>, where all the Star Wars Data was grabbed from, is down!
                    <br /><br />Something new will follow pretty soon!</p>
                    </div>
                </div>

            }
            {/*
                morePeoplePending &&
                <LoadingSpinner swapiLabel={true} />
            */}
        </Fragment>
    );
}

export default CardList;