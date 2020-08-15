import React, { useState } from "react";
import MultiPokemon from "./MultiPokemon";

function Home() {
    const [displayNum, setDisplayNum] = useState(100);
    const [searchValue, setSearchValue] = useState("");

    return (
        <div>
            
            <div className="container mb-5"> 
                <form className="form-inline">
                    <input 
                        className="form-control mb-2 mr-sm-2" 
                        type="text" 
                        id="search" 
                        name="search" 
                        value={searchValue}
                        onChange={e => {
                        setSearchValue(e.target.value.toString());
                        }}
                    />                
                    <input 
                    onChange={e=> {
                        setDisplayNum(parseInt(e.target.value))
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
            <MultiPokemon num={displayNum} search={searchValue} />
        </div>

    );
}

export default Home
