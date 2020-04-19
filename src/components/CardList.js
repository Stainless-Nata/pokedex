import React, { Fragment } from 'react';
import Card from './Card';
import LoadingSpinner from './Layout/LoadingSpinner/LoadingSpinner'
import { graphql, QueryRenderer } from 'react-relay';

import environment from '../environment';
import './CardList.css';

const CardList = ({ people, morePeoplePending }) => {          //using people array as props
    return (
        <QueryRenderer
            environment={environment}
            query={graphql`
                query CardListQuery {
                    pokemons(first: 151) {
                        id,
                        name,
                        image,
                        maxCP,
                        maxHP,
                        attacks{
                            fast{
                                name,type,damage
                            },
                            special{
                                name,type,damage
                            }
                        }
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
                return props.pokemons.map((pokemon, i) => {
                    return (<Card
                        key={i}
                        id={i}
                        name={pokemon.name}
                        height={""}
                        mass={""}
                        birth_year={""}
                        species={""}
                    />)
                })
            }}
        />
    );
}

export default CardList;