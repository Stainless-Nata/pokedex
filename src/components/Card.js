import React, { Fragment } from 'react';

import "./Card.css";


const Card = ({ id, name, image, types, expanded, onExpandedChange }) => {         //receiving props and destructuring them in the brackets

    const toggleOnExpandedChange = (id) => {
        id === expanded ? onExpandedChange(undefined) : onExpandedChange(id);
    }

    return (
        <div className="cardWrapper">
            <div onClick={() => toggleOnExpandedChange(id)} className='card noselect'>
                <img draggable="false" alt={`image ` + name} src={image} />
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
            {
                expanded === id &&
                <div className="cardDetails"></div>
            }

        </div>
    );
}

export default Card;

