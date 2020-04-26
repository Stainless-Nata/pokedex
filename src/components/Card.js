import React, { Fragment } from 'react';

import "./Card.css";


const Card = ({ index, id, name, image, types, height, weight, attacks, evolutions, expanded, onExpandedChange, onClearSearch, scrollToCard }) => {         //receiving props and destructuring them in the brackets

    const toggleOnExpandedChange = (index, id) => {
        if (id === expanded) {
            onExpandedChange(undefined);
        } else {
            scrollToCard(index);
            onExpandedChange(id);
        }
    }
    const triangle = (expanded === id) ? 'pokemonOpenTriangle' : 'pokemonClosedTriangle';
    return (
        <div className="cardWrapper noselect">
            <div onClick={() => toggleOnExpandedChange(index, id)} className='card'>
                {
                    !(expanded === id) &&
                    <img draggable="false" alt={`image ` + name} src={image} />
                }
                <div className='pokemonNameSection'>
                    <p className={expanded === id ? `pokemonNameExpanded` : undefined}>{name}</p>
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
                    <div className={`trianglePosition ` + triangle}></div>
                </div>
            </div>
            {
                expanded === id &&
                <div className="cardDetails">
                    <div>
                        <h3>Facts</h3>
                        <div className="factsImageWrapper">
                            <img draggable="false" alt={`image ` + name} src={image} />
                        </div>
                        <div className="factsHeightWrapper">
                            <div>
                                <img draggable="false" alt="height_icon" src={`/images/facts/height.png`} />
                            </div>
                            <div>
                                <p>Min: {height.minimum}</p>
                                <p>Max: {height.maximum}</p>
                            </div>

                        </div>
                        <div className="factsWeightWrapper">
                            <div>
                                <img draggable="false" alt="weight_icon" src={`/images/facts/weight.png`} />
                            </div>
                            <div>
                                <p>Min: {weight.minimum}</p>
                                <p>Max: {weight.maximum}</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3>Attacks</h3>
                    </div>
                    <div>
                        <h3>Evolutions</h3>
                        {evolutions === null ?
                            <p className="noEvolutionFoundText">Final evolution</p> :
                            evolutions.map((evolution, i) =>
                                <div key={i} className="evolutionsImageWrapper">
                                    <img onClick={() => { onClearSearch(); toggleOnExpandedChange(evolution.id) }} style={evolutions.length > 2 ? { marginTop: 15, height: 55 } : {}} draggable="false" alt={`image ` + name} src={evolution.image} />
                                    <p>{evolution.name}</p>
                                </div>
                            )}
                    </div>
                </div>
            }

        </div >
    );
}

export default Card;

