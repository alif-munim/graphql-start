import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import MultiPokemon from "./components/MultiPokemon";
import PokemonInfo from "./components/PokemonInfo";
import "./App.css";
import Logo from "./Logo.PNG";

const client = new ApolloClient({
  uri: "/graphql"
});


function App() {

  return (
    <ApolloProvider client={client}>
      <Router>
          <Link to="/">
            <div className="my-center my-3">
              <img width="85%" src={Logo}/>
            </div>
            
          </Link>
          <Route exact path="/" component={Home}/>
          <Route exact path="/pokemon/:name" component={PokemonInfo} />
      </Router>
    </ApolloProvider>
    
  );
}

export default App;
