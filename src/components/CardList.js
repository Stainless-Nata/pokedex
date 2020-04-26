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



const CardList = ({ searchBoxInput, expanded, onExpandedChange }) => {          //using people array as props

    return (
        <QueryRenderer
            environment={environment}
            query={graphql`
                query CardListQuery {
                    pokemons(first: 151) {
                        id,
                        name,
                        image,
                        types
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
                        id={pokemon.id}
                        name={pokemon.name}
                        image={pokemon.image}
                        types={pokemon.types}
                        expanded={expanded}
                        onExpandedChange={onExpandedChange}
                    />)
                })
            }}
        />
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(CardList);