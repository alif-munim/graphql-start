import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import MultiPokemon from "./components/MultiPokemon";
import PokemonInfo from "./components/PokemonInfo";
import "./App.css";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql"
});


function App() {

  return (
    <ApolloProvider client={client}>
      <Router>
          <Link to="/">
            <h1 className="display-4 my-5 text-center">Pokemon</h1>
          </Link>
          <Route exact path="/" component={Home} />
          <Route exact path="/pokemon/:name" component={PokemonInfo} />
      </Router>
    </ApolloProvider>
    
  );
}

export default App;
