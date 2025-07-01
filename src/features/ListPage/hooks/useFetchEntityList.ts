import { useQuery } from "@tanstack/react-query";
import { EntityPluralType } from "../../../common/aliases/types/entityTypes.types";
import { fetchFromAPI } from "../../../common/functions/fetchFromAPI";
import { EntityListUnion } from "../types/entityList.types";
import { OrUndefined } from "../../../common/aliases/types/OrUndefined";
import {
    ApiPopularEndpointPath,
    ApiSearchEndpointPath
} from "../../../common/aliases/types/apiEndpointPaths.types.ts";
import { FETCH_STATUSES } from "../../../common/constants/FETCH_STATUSES";

interface EndpointQueryParams {
    page: number;
    query?: string;
}

interface UseFetchEntityListProps {
    listEndpointPath: ApiSearchEndpointPath | ApiPopularEndpointPath;
    entityListName: EntityPluralType;
    fetchCondition: boolean;
    endpointQueryParams: EndpointQueryParams;
}

export interface EntityListQuery {
    data: OrUndefined<EntityListUnion>;
    status: typeof FETCH_STATUSES.ERROR | typeof FETCH_STATUSES.PENDING | typeof FETCH_STATUSES.SUCCESS;
    isPaused: boolean;
}

export const useFetchEntityList = ({
    entityListName,
    listEndpointPath,
    endpointQueryParams,
    fetchCondition
}: UseFetchEntityListProps): EntityListQuery => {

    const fecthEntityList = async () => {
        const formattedSearchParams = new URLSearchParams(endpointQueryParams as any);
        const endpoint = `${listEndpointPath}?${formattedSearchParams}`;
        return await fetchFromAPI<EntityListUnion>(endpoint);
    };

    const { data, status, isPaused } = useQuery<EntityListUnion>({
        queryKey: [entityListName, endpointQueryParams],
        queryFn: fecthEntityList,
        enabled: fetchCondition,
    });

    return { data, status, isPaused };
};