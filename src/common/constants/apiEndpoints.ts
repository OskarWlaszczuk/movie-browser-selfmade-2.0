import { TileEntityId } from "../aliases/interfaces/TileEntity";

export const creditsEndpoints = {
    getPersonCredits: (personId: TileEntityId) => `person/${personId}/credits`,
    getMovieCredits: (movieId: TileEntityId) => `movie/${movieId}/credits`,
};

export const detailsEndpoints = {
    getPersonDetails: (personId: TileEntityId) => `person/${personId}`,
    getMovieDetails: (movieId: TileEntityId) => `movie/${movieId}`,
};