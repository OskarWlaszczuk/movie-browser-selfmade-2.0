import { SearchQueryParams } from "../aliases/interfaces/SearchQueryParams";
import { TileEntityId } from "../aliases/interfaces/TileEntity";
import { EntityType } from "../aliases/types/EntityType";

const baseEntityEndpoints = {
    getMovie: (movieId: TileEntityId) => `movie/${movieId}`,
    getPerson: (personId: TileEntityId) => `person/${personId}`,
};

interface GetSearchEndpointProps extends SearchQueryParams {
    entityType: EntityType;
}

export const getSearchEndpoint = ({ search, pageNumber, entityType }: GetSearchEndpointProps) => (
    `search/${entityType}?query=${search}&include_adult=false&language=en-US&page=${pageNumber}`
);

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