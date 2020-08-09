import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import MultiPokemon from "./components/MultiPokemon";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql"
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <h1 className="display-4 my-5 text-center">Pokemon</h1>
        <MultiPokemon />
      </div>
    </ApolloProvider>
    
  );
}

export default App;
