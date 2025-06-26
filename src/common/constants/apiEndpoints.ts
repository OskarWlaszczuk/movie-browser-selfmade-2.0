import { URLQueryParams } from "../aliases/interfaces/URLSearchParams";
import { TileEntityId } from "../aliases/interfaces/TileEntity";
import { EntityType } from "../aliases/types/entityTypes.types";

const baseEntityEndpoints = {
    getMovie: (movieId: TileEntityId) => `movie/${movieId}`,
    getPerson: (personId: TileEntityId) => `person/${personId}`,
};

interface GetSearchEndpointProps extends URLQueryParams {
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
    getPeople: (pageNumber: URLQueryParams["pageNumber"]) => `person/popular?page=${pageNumber}`,
    getMovies: (pageNumber: URLQueryParams["pageNumber"]) => `movie/popular?page=${pageNumber}`,
};

export const popularEntityListEndpoints = {
    people: "person/popular",
    movies: "movie/popular",
} as const;

export const searchEntityListEndpoints = {
    person: "search/person",
    movie: "search/movie",
} as const;

export const entitiesDetailsEndpoints = {
    person: "person/",
    movie: "movie/",
} as const;