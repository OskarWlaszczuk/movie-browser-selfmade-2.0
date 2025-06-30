import { apiPopularEndpointPaths, apiSearchEndpointPaths } from "../../../../common/constants/apiEndpointPaths";
import { entitiesPluralTypes } from "../../../../common/constants/entityTypes";
import { EntityList } from "../EntityList";

export const People = () => (
    <EntityList
        popularListApiPath={apiPopularEndpointPaths.person}
        searchApiPath={apiSearchEndpointPaths.person}
        entityPluralType={entitiesPluralTypes.PEOPLE}
    />
);