import React, { Component, Fragment, useEffect } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Spin from "./Spin";

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
    }, [num, search]);

    return (
        <div>
            <Query query={MULTI_QUERY} variables={{ num }}> 
                {
                    ({loading, error, data}) => {
                        if (loading) return <div className="my-center">
                            <Spin/>
                        </div>
                    
                        if (error) console.log(error);

                        if (search != null) {
                            
                            const filteredPokemon = data.multiPokemon.filter(obj => obj.name.startsWith(search));

                            return <div className="container">
                                {
                                    filteredPokemon.map((data, index) => (
                                        <SinglePokemon key={index} name={data.name}/>
                                ))
                                }
                            </div>
                        } else {
                            return <div className="container">
                            {
                                data.multiPokemon.map((data, index) => (
                                    <SinglePokemon key={index} name={data.name}/>
                               ))
                            }
                        </div>
                        }
        
                    }
                }
            </Query>
        </div>
    )
}