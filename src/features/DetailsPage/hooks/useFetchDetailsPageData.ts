import { useParams } from "react-router-dom";
import { useFetchApi } from "../../../common/hooks/useFetchApi";
import { CreditsTypeUnion } from "../types/credits.types";
import { ApiEntityPathSegment } from "../../../common/aliases/types/apiEndpointPaths.types.ts";
import { DetailedEntityItem } from "../../../common/aliases/types/DetailedEntityItem";

export const useFetchDetailsPageData = (entityPathSegment: ApiEntityPathSegment) => {
    const { id } = useParams();

    const detailsEndpoint = `${entityPathSegment}${id}`;
    const creditsEndpoint = `${detailsEndpoint}/credits`;
    
    const endpointDependecies = [id!];

    const {
        status: entityDetailsStatus,
        data: entityDetails,
        isPaused: isEntityDetailsPaused
    } = useFetchApi<DetailedEntityItem>({
        queryKey: "details",
        endpoint: detailsEndpoint,
        urlDependencies: endpointDependecies
    });

    const {
        status: entityCreditsStatus,
        data: entityCredits,
        isPaused: isEntityCreditsPaused
    } = useFetchApi<CreditsTypeUnion>({
        queryKey: "credits",
        endpoint: creditsEndpoint,
        urlDependencies: endpointDependecies,
    });

    const detailsPageDataStatuses = [entityDetailsStatus, entityCreditsStatus];
    const detailsPausedFlags = [isEntityCreditsPaused, isEntityDetailsPaused];

    return {
        entityDetails,
        entityCredits,
        detailsPageDataStatuses,
        detailsPausedFlags,
    };
};