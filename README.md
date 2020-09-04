# graphql-start
A repository for my projects creating using graphql and the apollo graphql client for react.

In this repository:
* **customer-server**: a basic graphql server for querying customer data.
* **apollo-react**: a react app for viewing launch and rocket information gathered from the SpaceX API.
* **graphql-pokemon**: a react app for viewing detailed pokemon information gathered form the PokeAPI.

### customer-server
This project was my introduction to graphQL. I set up a local server using express, and enabled the graphiql interface to allow me to experiment with graphQL visually. Data was hardcoded in a local .json file.

Technologies used:
* Node.js, Express, GraphQL


### apollo-react
The apollo client for react provides tools for integrating graphql with react components. After defining a schema for my graphQL queries to the SpaceX API, I was able to leverage these tools to create a reactive user interface for users to navigate this information visually.

Technologies used:
* Node.js, Express, GraphQL
* React, Apollo GraphQL
* Bootstrap

### graphql-pokemon
This app built heavily on what I learned from graphql-spacex.
