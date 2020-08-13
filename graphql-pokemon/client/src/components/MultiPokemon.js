import React, { Component, Fragment, useEffect } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

import SinglePokemon from "./SinglePokemon";

const MULTI_QUERY = gql`
    query MultiPokemonQuery($num: Int!){
        multiPokemon(limit: $num) {
            name
            url
        }
    }
`;

export default function MultiPokemon({
    num, search
}) {

    useEffect(() => {
        // console.log("Number changed!");
    }, [num, search]);

    return (
        <div>
            <Query query={MULTI_QUERY} variables={{ num }}> 
                {
                    ({loading, error, data}) => {
                        if (loading) return <h4>Loading...</h4>
                        if (error) console.log(error);

                        // console.log(data.multiPokemon);
                        // console.log(num);
                        // console.log(search);

                        if (search != null) {
                            
                            const filteredPokemon = data.multiPokemon.filter(obj => obj.name.startsWith(search));

                            // console.log("searching");
                            // console.log(filteredPokemon);

                            return <div className="container">
                            {
                                filteredPokemon.map((data, index) => (
                                    <SinglePokemon key={index} data={data}/>
                               ))
                            }
                            </div>
                        } else {
                            return <div className="container">
                            {
                                data.multiPokemon.map((data, index) => (
                                    <SinglePokemon key={index} data={data}/>
                               ))
                            }
                        </div>
                        }
                        
                        return <h4>Placeholder</h4>
                        
                    }
                }
            </Query>
        </div>
    )
}