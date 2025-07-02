import { ApiPopularEndpointPath, ApiSearchEndpointPath } from "../../../common/aliases/types/apiEndpointPaths.types.ts";
import { EntityPluralType } from "../../../common/aliases/types/entityTypes.types.js";

export interface EntityListProps {
    popularListApiPath: ApiPopularEndpointPath;
    searchApiPath: ApiSearchEndpointPath;
    entityPluralType: EntityPluralType;
}