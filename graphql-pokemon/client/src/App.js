import React, { useState } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MultiPokemon from "./components/MultiPokemon";
import PokemonInfo from "./components/PokemonInfo"

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql"
});


function App() {

  const [displayNum, setDisplayNum] = useState(100);
  const [showSearch, setShowSearch] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <h1 className="display-4 my-5 text-center">Pokemon</h1>
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
          <Route exact path="/" render={
            (props) => 
              <MultiPokemon {...props} num={displayNum} search={searchValue}/>
          } />
          <Route exact path="/pokemon/:name" component={PokemonInfo} />
        </div>
      </Router>
    </ApolloProvider>
    
  );
}

export default App;
