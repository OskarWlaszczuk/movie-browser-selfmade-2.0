import { useQuery } from "@tanstack/react-query";
import { EntityListEndpoint } from "../../../common/aliases/types/endpointsPaths.types";
import { EntityListType } from "../../../common/aliases/types/entityTypes.types";
import { fetchFromAPI } from "../../../common/functions/fetchFromAPI";
import { EntityListUnion } from "../types/entityList.types";
import { OrUndefined } from "../../../common/aliases/types/OrUndefined";

interface UseFetchEntityListProps {
    entityListEndpoint: EntityListEndpoint;
    entityListName: EntityListType;
    fetchCondition: boolean;
    endpointQueryParams: {
        page: number;
        query?: string;
    };
}

export interface EntityListQuery {
    data: OrUndefined<EntityListUnion>;
    status: "error" | "success" | "pending"
    isPaused: boolean;
}

export const useFetchEntityList = ({
    entityListName,
    entityListEndpoint,
    endpointQueryParams,
    fetchCondition
}: UseFetchEntityListProps): EntityListQuery => {

    const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

    const fecthEntityList = async () => {
        // await sleep(2000); // opóźnienie np. 400ms
        const formattedSearchParams = new URLSearchParams(endpointQueryParams as any);
        const endpoint = `${entityListEndpoint}?${formattedSearchParams}`;
        return await fetchFromAPI<EntityListUnion>(endpoint);
    };

    const { data, status, isPaused } = useQuery<EntityListUnion>({
        queryKey: [entityListName, endpointQueryParams],
        queryFn: fecthEntityList,
        enabled: fetchCondition,
    });

    return { data, status, isPaused };
};