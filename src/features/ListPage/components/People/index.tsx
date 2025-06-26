import { EntityList } from "../EntityList";

export const People = () => (
    <EntityList
        popularListEndpoint="person/popular"
        searchEndpoint="search/person"
        entityListType="people"
    />
);