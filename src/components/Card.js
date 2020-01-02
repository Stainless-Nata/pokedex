import React, { Fragment } from 'react';


const Card = ({ name, gender, height, id }) => {         //receiving props and destructuring them in the brackets
    return (
        <Fragment>
            <div className='bg-light-green tc dib br3 pa3 ma2 grow bw2 shadow-5'>
                <img alt='people' src={`https://robohash.org/${id}?size=200x200`} />
                <div>
                    <h2>{name}</h2>
                    <p>{gender}</p>
                    <p>{height}</p>
                </div>
            </div>
        </Fragment>
    );
}

export default Card;

