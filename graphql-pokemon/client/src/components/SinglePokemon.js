import React, { Fragment } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { Link } from "react-router-dom";
import { Badge } from 'antd';
import 'antd/dist/antd.css';
import classNames from "classnames";
import Spin from "./Spin"

export default function SinglePokemon({
    name
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
                        if (loading) return <div className="my-center">
                            <Spin/>
                        </div>
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
                                    {/* {
                                        types.map(entry => (
                                            <span key={entry.type.name} className="badge badge-primary mx-1">{entry.type.name}</span>
                                        ))
                                    } */}
                                    {
                                        types.map(entry => (
                                            <div key={entry.type.name}>
                                                <Badge color={classNames({ 
                                                    "#f78c52": entry.type.name == "fire", 
                                                    "#70ad6d": entry.type.name == "grass",
                                                    "#ac4af7": entry.type.name == "poison",
                                                    "#4aa1f7": entry.type.name == "water",
                                                    "#58826a": entry.type.name == "bug",
                                                    "#9ee4ff": entry.type.name == "flying",
                                                    "#ffdf78": entry.type.name == "normal",
                                                    "#ffd769": entry.type.name == "electric",
                                                    "#cfa165": entry.type.name == "ground",
                                                    "#918e8a": entry.type.name == "rock",
                                                    "#a02aa8": entry.type.name == "psychic",
                                                    "#ade5ff": entry.type.name == "ice",
                                                    "#352166": entry.type.name == "ghost",
                                                    "#89c992": entry.type.name == "steel",
                                                    "#ff9626": entry.type.name == "dragon",
                                                    "#47494d": entry.type.name == "dark",
                                                    "#e685ed": entry.type.name == "fairy",
                                                    "#bd2d28": entry.type.name == "fighting",
                                                })} text={entry.type.name} />
                                            </div>
                                        ))
                                    }
                                    <Link to={`/pokemon/${name}`} className="btn btn-primary mt-2">Details</Link>
                                </div>
                                
                            </div>
                        </Fragment>
                    }
                }
            </Query>
        </div>
    )
}

