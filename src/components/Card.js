import React, { Fragment } from 'react';

import "./Card.css";


const Card = ({ id, name, image, types, }) => {         //receiving props and destructuring them in the brackets

    return (
        <Fragment>
            <div className='card'>
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

