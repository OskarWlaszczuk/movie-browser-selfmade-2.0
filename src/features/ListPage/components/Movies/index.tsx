import { EntityList } from "../EntityList";

export const Movies = () => (
    <EntityList
        popularListEndpoint="movie/popular"
        searchEndpoint="search/movie"
        entityListType="movies"
    />
);