import React, { Fragment } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { Link } from "react-router-dom";

export default function SinglePokemon({
    data: {
        name
    }
}) {

    const SINGLE_QUERY = gql`
        query SingleQuery($name: String!) {
            singlePokemon(id: $name) {
                name
                id
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

                        // console.log(data);

                        const {
                            name,
                            id,
                            sprites,
                            types
                        } = data.singlePokemon

                        return <Fragment>
                            <div className="media">
                                <img className="d-flex mr-3" src={sprites.front_default} alt={name} height="150"/>
                                <div className="media-body">
                                    <h5 className="mt-3">
                                    <span className="text-dark">{id}:</span> {name}
                                    </h5>
                                    {
                                        types.map(entry => (
                                            <span className="badge badge-primary mx-1">{entry.type.name}</span>
                                        ))
                                    }
                                    <br/>
                                    <Link to={`/pokemon/${name}`} className="btn btn-primary mt-3">Details</Link>
                                </div>
                                
                            </div>
                        </Fragment>
                    }
                }
            </Query>
        </div>
    )
}

