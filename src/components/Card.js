import React from 'react';

import "./Card.css";


const Card = ({ id, name, image, types, height, weight, attacks, evolutions, expanded, onExpandedChange, searchBoxInput, searchForEvolution }) => {         //receiving props and destructuring them in the brackets

    const toggleOnExpandedChange = (id) => {
        if (id === expanded) {
            onExpandedChange(undefined);
        } else {
            onExpandedChange(id);
        }
    }

    const onEvolutionClick = (id, name) => {
        if (searchBoxInput !== "") {
            searchForEvolution(name);
            toggleOnExpandedChange(id);
        } else {
            toggleOnExpandedChange(id);
        }
    }

    const triangle = (expanded === id) ? 'pokemonOpenTriangle' : 'pokemonClosedTriangle';
    return (
        <div className="cardWrapper noselect">

            <div onClick={() => toggleOnExpandedChange(id)} className='card'>
                {
                    expanded === id &&
                    <div onClick={() => toggleOnExpandedChange(id)} className="cardBorder" />
                }
                {
                    !(expanded === id) &&
                    <img draggable="false" alt={`image ` + name} src={image} />
                }
                <div className='pokemonNameSection'>
                    <p className={expanded === id ? `pokemonNameExpanded` : undefined}>{name}</p>
                </div>
                <div className='pokemonTypeSection'>
                    <div className='pokemonTypeOverlay'>
                        <div className='pokemonTypeOverlayBackground' style={{ backgroundImage: `url('images/textures/${types[0].toLowerCase()}.png')` }} />
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
                                <img draggable="false" alt="height_icon" src={`images/facts/height.png`} />
                            </div>
                            <div>
                                <p>Min: {height.minimum}</p>
                                <p>Max: {height.maximum}</p>
                            </div>

                        </div>
                        <div className="factsWeightWrapper">
                            <div>
                                <img draggable="false" alt="weight_icon" src={`images/facts/weight.png`} />
                            </div>
                            <div>
                                <p>Min: {weight.minimum}</p>
                                <p>Max: {weight.maximum}</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3>Attacks</h3>
                        <div className="attacksWrapper">
                            <div>
                                <p>FAST</p>
                                {attacks.fast === null ?
                                    <p className="noAttacksFoundText">No FAST Attacks found!</p> :
                                    attacks.fast.map((attack, i) =>
                                        attack.name !== null &&
                                        <div key={i} className="fastAttack attackCard">
                                            <p className="attackName">{attack.name}</p>
                                            <p className="attackDamage">{attack.damage}</p>
                                        </div>

                                    )}
                            </div>
                            <div>
                                <p>SPECIAL</p>
                                {attacks.special === null ?
                                    <p className="noAttacksFoundText">No FAST Attacks found!</p> :
                                    attacks.special.map((attack, i) =>
                                        <div key={i} className="specialAttack attackCard">
                                            <p className="attackName">{attack.name}</p>
                                            <p className="attackDamage">{attack.damage}</p>
                                        </div>
                                    )}
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3>Evolutions</h3>
                        {evolutions === null ?
                            <p className="noEvolutionFoundText">Final evolution</p> :
                            evolutions.map((evolution, i) =>
                                <div key={i} className="evolutionsImageWrapper">
                                    <img onClick={() => onEvolutionClick(evolution.id, evolution.name)} style={evolutions.length > 2 ? { marginTop: 15, height: 55 } : {}} draggable="false" alt={`image ` + name} src={evolution.image} />
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

