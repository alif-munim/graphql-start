import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MultiPokemon from "./components/MultiPokemon";
import PokemonInfo from "./components/PokemonInfo"

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql"
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <h1 className="display-4 my-5 text-center">Pokemon</h1>
          <Route exact path="/" component={MultiPokemon} />
          <Route exact path="/pokemon/:name" component={PokemonInfo} />
        </div>
      </Router>
    </ApolloProvider>
    
  );
}

export default App;
