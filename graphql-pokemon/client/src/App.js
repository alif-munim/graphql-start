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

  const [displayNum, setDisplayNum] = useState(5);

  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <h1 className="display-4 my-5 text-center">Pokemon</h1>
          <div className="container mb-5">
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
              <MultiPokemon {...props} num={displayNum}/>
          } />
          <Route exact path="/pokemon/:name" component={PokemonInfo} />
        </div>
      </Router>
    </ApolloProvider>
    
  );
}

export default App;
