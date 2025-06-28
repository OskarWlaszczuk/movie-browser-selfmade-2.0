import { entitiesSingularTypes } from "./entityTypes";

export const apiEntityPathSegments = Object.fromEntries(
    Object.values(entitiesSingularTypes).map(entity => [entity, `${entity}/`])
);

export const apiPopularEndpointPaths = Object.fromEntries(
    Object.values(entitiesSingularTypes).map(entity => [entity, `${entity}/popular`])
);

export const apiSearchEndpointPaths = Object.fromEntries(
    Object.values(entitiesSingularTypes).map(entity => [entity, `search/${entity}`])
);