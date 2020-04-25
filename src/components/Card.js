import React, { Fragment } from 'react';

import "./Card.css";


const Card = ({ id, name, image, types, }) => {         //receiving props and destructuring them in the brackets

    return (
        <Fragment>
            <div className='card'>
                <img alt={`image ` + name} src={image} />
                <div className='pokemonNameSection'>
                    <p>{name}</p>
                </div>
                <div className='pokemonTypeSection'>
                    <div className='pokemonTypeOverlay'>
                        <div className='pokemonTypeOverlayBackground' style={{ backgroundImage: `url('/images/textures/${types[0]}.png')` }} />
                    </div>

                    {
                        types.length === 2 ?
                            <>
                                <div className='pokemonTypePositionOne pokemonType'>
                                    <p>{types[0]}</p>
                                </div>
                                <div className='pokemonTypePositionTwo pokemonType'>
                                    <p>{types[1]}</p>
                                </div>
                            </>
                            :
                            <div className='pokemonTypePosition pokemonType'>
                                <p>{types}</p>
                            </div>
                    }
                    <div className='trianglePosition pokemonClosedTriangle'></div>
                </div>
            </div>
        </Fragment>
    );
}

export default Card;

