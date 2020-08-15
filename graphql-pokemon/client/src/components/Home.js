import React, { useState } from "react";
import MultiPokemon from "./MultiPokemon";

function Home() {
    const [displayNum, setDisplayNum] = useState(100);
    const [showSearch, setShowSearch] = useState(false);
    const [searchValue, setSearchValue] = useState("");

    return (
        <div>
            
            <div className="container mb-5">
                <button 
                className="btn btn-primary"
                onClick={() => {
                    setShowSearch(!showSearch)
                }}> 
                Search
                </button>
                {
                showSearch && 
                <input 
                    className="form-control my-3" 
                    type="text" 
                    id="search" 
                    name="search" 
                    value={searchValue}
                    onChange={e => {
                    setSearchValue(e.target.value.toString());
                    }}
                />
                }
                
                <input 
                onChange={e=> {
                    setDisplayNum(parseInt(e.target.value))
                }}
                className="form-control" 
                type="number" 
                id="quantity" 
                name="quantity" 
                min="1" 
                max="100"
                value={displayNum}
                />
            </div>
            <MultiPokemon num={displayNum} search={searchValue} />
        </div>

    );
}

export default Home
