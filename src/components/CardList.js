import React, { Fragment } from 'react';
import Card from './Card';

const CardList = ({ robots }) => {          //using robots array as props
    /*
    if (true) {
        throw new Error('noooo!');          this would throw an error to test the error boundry written in ErrorBoundry.js
    }*/
    return (
        <Fragment>  {/* this fragment is to wrap all returned cards, but will avoid a additional wrap div */}
            {   //wrap in curly brackets cause it's javascript
                robots.map((user, i) => {           //for each user in robots array
                    return (                        //return of the map function 
                        <Card
                            key={i}
                            id={robots[i].id}
                            name={robots[i].name}
                            email={robots[i].email}
                        />);
                })
            }
        </Fragment>
    );
}

export default CardList;