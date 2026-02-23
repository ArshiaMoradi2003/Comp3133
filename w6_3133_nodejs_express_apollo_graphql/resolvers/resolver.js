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