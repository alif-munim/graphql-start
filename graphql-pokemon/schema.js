const axios = require("axios");
const {
    GraphQLInt,
    GraphQLString,
    GraphQLList,
    GraphQLObjectType,
    GraphQLSchema,
} = require("graphql");

// Species

const PokemonSpecies = new GraphQLObjectType({
    name: "PokemonSpecies",
    fields: () => ({
        evolution_chain: { type: PokemonURL }
    })
});

const PokemonURL = new GraphQLObjectType({
    name: "PokemonURL",
    fields: () => ({
        url: { type: GraphQLString }
    })
});


// Evolution Chain

const SpeciesType = new GraphQLObjectType({
    name: "SpeciesType",
    fields: () => ({
        name: { type: GraphQLString },
        url: { type: GraphQLString }
    })
});

// Multiple Pokemon

const MultiPokemonType = new GraphQLObjectType({
    name: "MultiPokemon",
    fields: () => ({
        name: { type: GraphQLString },
        url: { type: GraphQLString }
    })
});

// Single Pokemon

const SinglePokemonType = new GraphQLObjectType({
    name: "SinglePokemon",
    fields: () => ({
        name: { type: GraphQLString },
        id: { type: GraphQLInt },
        sprites: { type: SpriteType },
        types: { type: new GraphQLList(PokemonTypes) },
        stats: { type: new GraphQLList(PokemonStats) }
    })
});

const SpriteType = new GraphQLObjectType({
    name: "Sprite",
    fields: () => ({
        front_default: { type: GraphQLString },
        back_default: { type: GraphQLString }
    })
});

// Types

const PokemonTypes = new GraphQLObjectType({
    name: "Types",
    fields: () => ({
        slot: { type: GraphQLInt },
        type: { type: TypeInfo }
    })
});

const TypeInfo = new GraphQLObjectType({
    name: "TypeInfo",
    fields: () => ({
        name: { type: GraphQLString },
        url: { type: GraphQLString }
    })
});

// Stats

const PokemonStats = new GraphQLObjectType({
    name: "Stats",
    fields: () => ({
        base_stat: { type: GraphQLInt },
        stat: { type: StatType }
    })
});

const StatType = new GraphQLObjectType({
    name: "Stat",
    fields: () => ({
        name: { type: GraphQLString }
    })
});

// Root Query

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        multiPokemon: {
            type: new GraphQLList(MultiPokemonType),
            args: {
                limit: {
                    type: GraphQLInt
                }
            },
            resolve(parent, args) {
                return axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${args.limit}`)
                    .then(res => res.data.results);
            }
        },
        singlePokemon: {
            type: SinglePokemonType,
            args: {
                id: { 
                    type: GraphQLString
                }
            },
            resolve(parent, args) {
                return axios.get(`https://pokeapi.co/api/v2/pokemon/${args.id}`)
                    .then(res => res.data);
            }
        },
        pokemonSpecies: {
            type: PokemonSpecies,
            args: {
                url: {
                    type: GraphQLString
                }
            },
            resolve(parent, args) {
                return axios.get(`${args.url}`)
                    .then(res => res.data);
            }
        }
    }
});


module.exports = new GraphQLSchema({
    query: RootQuery
});
