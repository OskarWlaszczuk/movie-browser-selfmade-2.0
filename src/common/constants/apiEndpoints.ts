import { TileEntityId } from "../aliases/interfaces/TileEntity";

export const creditsEndpoints = {
    getPersonCredits: (personId: TileEntityId) => `person/${personId}/credits`,
    getMovieCredits: (movieId: TileEntityId) => `movie/${movieId}/credits`,
};