import React, { Fragment } from 'react';
import Card from './Card';
import LoadingSpinner from './Layout/LoadingSpinner/LoadingSpinner'
import { QueryRenderer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

import environment from '../environment';
import './CardList.css';

const CardList = ({ searchBoxInput }) => {          //using people array as props
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
                    />)
                })
            }}
        />
    );
}

export default CardList;