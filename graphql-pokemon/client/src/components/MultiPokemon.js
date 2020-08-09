import React, { Fragment } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

import SinglePokemon from "./SinglePokemon";

const MULTI_QUERY = gql`
    query MultiPokemonQuery {
        multiPokemon(limit: 20) {
            name
            url
        }
    }
`;

export default function MultiPokemon() {
    return (
        <div>
            <Query query={MULTI_QUERY}> 
                {
                    ({loading, error, data}) => {
                        if (loading) return <h4>Loading...</h4>
                        if (error) console.log(error);

                        console.log(data.multiPokemon);

                        
                        return <div className="container">
                            {
                                data.multiPokemon.map((data, index) => (
                                    <SinglePokemon key={index} data={data}/>
                               ))
                            }
                        </div>
                        

                        
                    }
                }
            </Query>
        </div>
    )
}
