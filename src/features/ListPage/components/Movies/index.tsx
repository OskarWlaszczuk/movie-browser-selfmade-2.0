import { apiPopularEndpointPaths, apiSearchEndpointPaths } from "../../../../common/constants/apiEndpointPaths";
import { entitiesPluralTypes } from "../../../../common/constants/entityTypes";
import { EntityList } from "../EntityList";

export const Movies = () => (
    <EntityList
        popularListApiPath={apiPopularEndpointPaths.movie}
        searchApiPath={apiSearchEndpointPaths.movie}
        entityPluralType={entitiesPluralTypes.MOVIES}
    />
);