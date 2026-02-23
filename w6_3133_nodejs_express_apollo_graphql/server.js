const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');
const { gql } = require('graphql-tag');

let movies = [
    {
        id: "1",
        name: "Inception",
        director_name: "Christopher Nolan",
        production_house: "Warner Bros",
        release_date: "2010",
        rating: 8.8
    }
];

const typeDefs = gql`
    type Movie {
        id: ID!
        name: String!
        director_name: String!
        production_house: String!
        release_date: String!
        rating: Float!
    }

    type Query {
        getAllMovies: [Movie]
        getMovieById(id: ID!): Movie
        getMoviesByDirector(director_name: String!): [Movie]
    }

    type Mutation {
        addMovie(
            name: String!,
            director_name: String!,
            production_house: String!,
            release_date: String!,
            rating: Float!
        ): Movie

        updateMovie(
            id: ID!,
            name: String,
            director_name: String,
            production_house: String,
            release_date: String,
            rating: Float
        ): Movie

        deleteMovie(id: ID!): String
    }
`;

// ✅ ADD THIS BLOCK
const resolvers = {
    Query: {
        getAllMovies: () => movies,

        getMovieById: (_, { id }) =>
            movies.find(movie => movie.id === id),

        getMoviesByDirector: (_, { director_name }) =>
            movies.filter(movie =>
                movie.director_name === director_name)
    },

    Mutation: {
        addMovie: (_, args) => {
            const newMovie = {
                id: String(movies.length + 1),
                ...args
            };
            movies.push(newMovie);
            return newMovie;
        },

        updateMovie: (_, { id, ...args }) => {
            const movie = movies.find(m => m.id === id);
            if (!movie) return null;

            Object.assign(movie, args);
            return movie;
        },

        deleteMovie: (_, { id }) => {
            const index = movies.findIndex(m => m.id === id);
            if (index === -1) return "Movie not found";

            movies.splice(index, 1);
            return "Movie deleted successfully";
        }
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers
});

startStandaloneServer(server, {
    listen: { port: 4000 }
}).then(({ url }) => {
    console.log(`Server ready at ${url}`);
});