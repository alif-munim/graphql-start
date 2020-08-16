import React, { Component, Fragment } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { Link } from "react-router-dom";
import Species from "./Species";
import PokeStat from "./PokeStat";
import Spin from "./Spin";

const INFO_QUERY = gql`
    query InfoQuery($name: String!) {
        singlePokemon(id: $name) {
            name
            id
            sprites {
                front_default
                back_default
            }
            types {
                type {
                    name
                }
            }
            stats {
                base_stat
                stat {
                    name
                }
            }
            species {
                name
                url
            }
        }
    }
`;

export class PokemonInfo extends Component {
    render() {

        let { name } = this.props.match.params;

        return (
            <div className="container">
                <Query query={INFO_QUERY} variables={{ name }}>
                    {
                        ({loading, error, data}) => {
                            if (loading) return <div className="my-center">
                                <Spin/>
                            </div>
                            if (error) return console.log(error)

                            const {
                                name,
                                id,
                                sprites: {
                                    front_default,
                                    back_default
                                },
                                types,
                                stats,
                                species
                            } = data.singlePokemon;
                            

                            return <div>
                                <h1 className="display-4 my-3">
                                    <span className="text-dark">{id}:</span> { name }
                                </h1>

                                <h4 className="mb-3">Sprites</h4>
                                <img src={front_default} height="250"/>
                                <img src={back_default} height="250"/>

                                <Species url={species.url} />

                                <h4 className="mb-3">Types</h4>
                                <ul className="list-group mb-5">
                                    {
                                        types.map(typeObj => (
                                        <li key={typeObj.type.name} className="list-group-item">{typeObj.type.name}</li>
                                        ))
                                    }
                                
                                </ul>

                                <h4 className="mb-3">Stats</h4>
                                <div className="card mb-5">
                                    <div className="card-body">
                                        <PokeStat statistics={stats}/>
                                    </div>
                                </div>
                                
                                <Link to="/" className="btn btn-secondary mb-5">Back</Link>
                            </div>
                        }
                    }
                </Query>
            </div>
        )
    }
}

export default PokemonInfo
