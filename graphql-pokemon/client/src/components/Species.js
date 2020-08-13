import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { EvolutionChain } from "./EvolutionChain";

const SPECIES_QUERY = gql`\
    query speciesQuery($url: String!) {
        pokemonSpecies(url: $url) {
            evolution_chain {
                url
            }
        }
    }
`;

export default function Species({ url }) {
    return (
        <div>
            <Query query={SPECIES_QUERY} variables={{ url }}>
                {
                    ({loading, error, data}) => {
                        if (loading) return <h4>Loading...</h4>
                        if (error) console.log(error);

                        console.log(data.pokemonSpecies.evolution_chain.url)

                        return <div>
                            <EvolutionChain url={data.pokemonSpecies.evolution_chain.url}/>
                        </div>
                    }
                }
            </Query>
        </div>
    )
}

