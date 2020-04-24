import React, { Fragment } from 'react';

import "./Card.css";


const Card = ({ id, name, image, types, }) => {         //receiving props and destructuring them in the brackets

    return (
        <Fragment>
            <div className='card tc dib br3 pa3 ma2 grow bw2 shadow-5'>
                <img alt={`image ` + name} src={image} />
                <div>
                    <h2>{name}</h2>
                    <p>Types: {types}</p>
                </div>
            </div>
        </Fragment>
    );
}

export default Card;

