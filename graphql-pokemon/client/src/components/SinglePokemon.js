import React, { Fragment } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

export default function SinglePokemon({
    data: {
        name
    }
}) {

    const SINGLE_QUERY = gql`
        query SingleQuery($name: String!) {
            singlePokemon(id: $name) {
                name
                sprites {
                    front_default
                }
                types {
                    type {
                        name
                    }
                }
            }
        }
    `;

    return (
        <div className="card card-body mb-3">
            <Query query={SINGLE_QUERY} variables={{ name }}>
                {
                    ({loading, error, data}) => {
                        if (loading) return <h4>Loading...</h4>
                        if (error) console.log(error)

                        console.log(data);

                        const {
                            name,
                            sprites,
                            types
                        } = data.singlePokemon

                        return <Fragment>
                            <div className="media">
                                <img className="d-flex mr-3" src={sprites.front_default} alt={name} height="150"/>
                                <div className="media-body">
                                    <h5 className="mt-3">{name}</h5>
                                    {
                                        types.map(entry => (
                                            <p className="my-0">{entry.type.name}</p>
                                        ))
                                    }
                                </div>
                                
                            </div>
                        </Fragment>
                    }
                }
            </Query>
        </div>
    )
}

