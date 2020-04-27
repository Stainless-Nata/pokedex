import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Card from './Card';
import LoadingSpinner from './Layout/LoadingSpinner/LoadingSpinner'
import { QueryRenderer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

import environment from '../environment';
import './CardList.css';

import { setExpanded } from '../actions'

const mapStateToProps = state => {
    return {
        expanded: state.changeExpanded.id,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onExpandedChange: (id) => dispatch(setExpanded(id)),
    }
}



const CardList = ({ searchBoxRef, searchBoxInput, setSearchChange, expanded, onExpandedChange }) => {          //using people array as props

    const searchForEvolution = (name) => {
        setSearchChange(name);
        searchBoxRef.current.focus();
    }


    return (
        <QueryRenderer
            environment={environment}
            query={graphql`
                query CardListQuery {
                    pokemons(first: 151) {
                        id,
                        name,
                        image,
                        types,
                        height{minimum, maximum},
  				        weight{minimum, maximum},
                        attacks{fast{name,damage},special{name,damage}},
  				        evolutions{id,name,image}
                    } 
                }
            `}
            variables={{}}
            render={({ error, props }) => {
                if (error) {
                    return <div>Error!</div>;
                }
                if (!props) {
                    return <LoadingSpinner swapiLabel={true} />;
                }
                const filteredPokemon = props.pokemons.filter(pokemon => {
                    return pokemon.name.toLowerCase().includes(searchBoxInput.toLowerCase());
                });

                return filteredPokemon.map((pokemon, i) => {
                    return (<Card
                        key={i}
                        index={i}
                        id={pokemon.id}
                        name={pokemon.name}
                        image={pokemon.image}
                        types={pokemon.types}
                        height={pokemon.height}
                        weight={pokemon.weight}
                        attacks={pokemon.attacks}
                        evolutions={pokemon.evolutions}
                        expanded={expanded}
                        onExpandedChange={onExpandedChange}
                        searchBoxInput={searchBoxInput}
                        searchForEvolution={searchForEvolution}
                    />)
                })
            }}
        />
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(CardList);