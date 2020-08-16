import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { EvolutionChain } from "./EvolutionChain";
import ProgressBar from "./Progress";
import Spin from "./Spin";

const SPECIES_QUERY = gql`\
    query speciesQuery($url: String!) {
        pokemonSpecies(url: $url) {
            evolution_chain {
                url
            }
            flavor_text_entries {
                flavor_text
                language {
                    name
                    url
                }
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
                        if (loading) return <div className="my-center">
                            <Spin/>
                        </div>
                        if (error) console.log(error);

                        const {
                            evolution_chain,
                            flavor_text_entries
                        } = data.pokemonSpecies;

                        let description;

                        for (let i = 0; i < flavor_text_entries.length; i++) {
                            if (flavor_text_entries[i].language.name == "en") {
                                description = flavor_text_entries[i].flavor_text;
                            }
                        }

                        return <div>
                            <div className="mb-5">
                                <h4 className="mb-3">Description</h4>
                                <p className="text-primary"></p>
                                <div className="card">
                                    <div className="card-body">
                                        {description}
                                    </div>
                                </div>
                            </div>
                            
                            <h4 className="mb-3">Evolution Chain</h4>
                            <EvolutionChain url={evolution_chain.url}/>
                        </div>
                    }
                }
            </Query>
        </div>
    )
}

