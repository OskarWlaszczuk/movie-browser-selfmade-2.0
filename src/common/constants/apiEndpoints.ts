import { TileEntityId } from "../aliases/interfaces/TileEntity";

const baseEntityEndpoints = {
    getMovie: (movieId: TileEntityId) => `movie/${movieId}`,
    getPerson: (personId: TileEntityId) => `person/${personId}`,
};

export const creditsEndpoints = {
    getPersonCredits: (personId: TileEntityId) => `${baseEntityEndpoints.getPerson(personId)}/credits`,
    getMovieCredits: (movieId: TileEntityId) => `${baseEntityEndpoints.getMovie(movieId)}/credits`,
};

export const detailsEndpoints = {
    getPersonDetails: (personId: TileEntityId) => `${baseEntityEndpoints.getPerson(personId)}`,
    getMovieDetails: (movieId: TileEntityId) => `${baseEntityEndpoints.getMovie(movieId)}`,
};

export const popularListsEndpoints = {
    persons: "person/popular",
    movies: "movie/popular",
} as const;