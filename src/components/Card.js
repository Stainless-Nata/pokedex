import React, { Fragment } from 'react';

import "./Card.css";

const Card = ({ name, gender, height, species, id }) => {         //receiving props and destructuring them in the brackets

    return (
        <Fragment>
            <div className='card tc dib br3 pa3 ma2 grow bw2 shadow-5'>
                {
                    Array.isArray(species) ?
                        <img alt={`loading_image`} src={`images/cards/loading_image.png`} />
                        :
                        <img alt={`${species}`} src={`images/cards/${species}.png`} />
                }
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

