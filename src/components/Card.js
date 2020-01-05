import React, { Fragment } from 'react';

import "./Card.css";

const nameImageSwitch = (name, species) => {
    switch (name) {
        case 'Luke Skywalker':
            return <img alt={`${name}`} src={`images/cards/luke-skywalker.png`} />;
        case 'R2-D2':
            return <img alt={`${name}`} src={`images/cards/r2d2.png`} />;
        case 'Darth Vader':
            return <img alt={`${name}`} src={`images/cards/darth-vader.png`} />;
        case 'C-3PO':
            return <img alt={`${name}`} src={`images/cards/c3p0.png`} />;
        case 'Leia Organa':
            return <img alt={`${name}`} src={`images/cards/princess-leia.png`} />;
        case 'Boba Fett':
            return <img alt={`${name}`} src={`images/cards/boba_fett.png`} />;
        default:
            return <img alt={`${species}`} src={`images/cards/${species}.png`} />;
    }
}


const Card = ({ name, gender, height, species, id }) => {         //receiving props and destructuring them in the brackets

    return (
        <Fragment>
            <div className='card tc dib br3 pa3 ma2 grow bw2 shadow-5'>
                {
                    Array.isArray(species) ?
                        <img alt={`loading_image`} src={`images/cards/loading_image.png`} />
                        : nameImageSwitch(name, species)
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

