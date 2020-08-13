import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import SinglePokemon from "./SinglePokemon"

const EVOLUTION_QUERY = gql`
    query evolutionQuery($url: String!) {
        evolutionChain(url: $url) {
            chain {
                evolves_to {
                    evolves_to {
                        species {
                            name
                            url
                        }
                    }
                    species {
                        name
                        url
                    }
                }
                species {
                    name
                    url
                }
            }
        }
    }
`;

export const EvolutionChain = ({ url }) => {
    return (
        <div>
            <Query query={EVOLUTION_QUERY} variables={{ url }}>
                {
                    ({loading, error, data}) => {
                        if (loading) return <h4>Loading...</h4>
                        if (error) console.log(error);

                        const evolutions = [];
                        const chainObj = data.evolutionChain.chain;
                        // console.log(chainObj);

                        evolutions.push(chainObj.species.name);
                        if (chainObj.evolves_to.length != null && chainObj.evolves_to.length > 0) evolutions.push(chainObj.evolves_to[0].species.name);
                        if (chainObj.evolves_to[0].evolves_to != null && chainObj.evolves_to[0].evolves_to.length > 0) evolutions.push(chainObj.evolves_to[0].evolves_to[0].species.name);
                        

                        // console.log(evolutions);

                        return <div className="mb-5">
                            {
                                evolutions.map(pokemon => (
                                    <SinglePokemon key={pokemon} name={pokemon}/>
                                ))
                            }
                        </div>
                    }
                }
            </Query>
        </div>
    )
}
