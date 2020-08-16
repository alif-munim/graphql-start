import React, { useState } from "react";
import MultiPokemon from "./MultiPokemon";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { AutoComplete } from 'antd';
import 'antd/dist/antd.css';
import Spin from "./Spin";

function Home() {

    const ALL_POKEMON_QUERY = gql`
        query allPokemonQuery {
            multiPokemon(limit: 900) {
                name
            }
        }
    `;

    const [displayNum, setDisplayNum] = useState(10);
    const [searchValue, setSearchValue] = useState("");
    const [options, setOptions] = useState([]);

    const pokemonArr = [];

    const onSelect = data => {
        setSearchValue(data);
    };

    const onChange = data => {
        setSearchValue(data);
    };

    return (
        <div>          
            <div className="container mb-5"> 
                <form className="form-inline justify-content-center">
                    <Query query={ALL_POKEMON_QUERY}>
                    {
                        ({loading, error, data}) => {
                            if (loading) return <div className="my-center">
                                <Spin/>
                            </div>
                            if (error) console.log(error);

                            data.multiPokemon.forEach(pokemon => {
                                pokemonArr.push({
                                    value: pokemon.name
                                });
                            });                    

                            return <div>
                                <AutoComplete
                                    className="form-control mb-2 mr-sm-2"
                                    options={options}
                                    style={{
                                    width: 200,
                                    }}
                                    onSelect={onSelect}
                                    onSearch={(searchText) => {
                                        setOptions(
                                            pokemonArr
                                                .slice(0, displayNum + 1)
                                                .filter(pokemonObj => 
                                                    pokemonObj.value.toLowerCase()
                                                    .startsWith(searchText.toLowerCase())
                                                )
                                        );
                                    }}
                                    onChange={onChange}
                                />
                            </div>
                        }
                    }
                    </Query>
                    <input 
                    onChange={e=> {
                        setDisplayNum(parseInt(e.target.value));
                    }}
                    className="form-control mb-2 mr-sm-2" 
                    type="number" 
                    id="quantity" 
                    name="quantity" 
                    min="1" 
                    max="100"
                    value={displayNum}
                    />
                </form>
            </div>
            <MultiPokemon num={displayNum} search={searchValue.toLowerCase()} />
        </div>

    );
}

export default Home
