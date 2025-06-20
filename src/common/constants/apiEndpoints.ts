import { TileEntityId } from "../aliases/interfaces/TileEntity";

const baseEntityEndpoints = {
    movie: (movieId: TileEntityId) => `movie/${movieId}`,
    person: (personId: TileEntityId) => `person/${personId}`,
};

export const creditsEndpoints = {
    getPersonCredits: (personId: TileEntityId) => `${baseEntityEndpoints.person(personId)}/credits`,
    getMovieCredits: (movieId: TileEntityId) => `${baseEntityEndpoints.movie(movieId)}/credits`,
};

export const detailsEndpoints = {
    getPersonDetails: (personId: TileEntityId) => `${baseEntityEndpoints.person(personId)}`,
    getMovieDetails: (movieId: TileEntityId) => `${baseEntityEndpoints.movie(movieId)}`,
};