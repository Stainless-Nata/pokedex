import React, { Fragment } from 'react';
import Card from './Card';

const CardList = ({ people }) => {          //using people array as props
    /*
    if (true) {
        throw new Error('noooo!');          this would throw an error to test the error boundry written in ErrorBoundry.js
    }*/
    return (
        <Fragment>  {/* this fragment is to wrap all returned cards, but will avoid a additional wrap div */}
            {   //wrap in curly brackets cause it's javascript
                people.map((person, i) => {           //for each user in people array
                    return (                        //return of the map function 
                        <Card
                            key={i}
                            id={i}
                            name={person.name}
                            gender={person.gender}
                            height={person.height}
                            species={person.species}
                        />);
                })
            }
        </Fragment>
    );
}

export default CardList;