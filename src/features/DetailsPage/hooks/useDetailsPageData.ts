import { useParams } from "react-router-dom";
import { entitiesDetailsEndpoints } from "../../../common/constants/apiEndpoints";
import { useFetchApi } from "../../../common/hooks/useFetchApi";
import { DetailedEntityItem } from "../../../common/aliases/types/DetailedEntityItem";
import { CreditsType } from "../types/credits.types";

type EntityDetailsEndpoints = typeof entitiesDetailsEndpoints[keyof typeof entitiesDetailsEndpoints];

export const useDetailsPageData = (endpointEntityType: EntityDetailsEndpoints) => {
    const { id } = useParams();

    const detailsEndpoint = `${endpointEntityType}${id}`;
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
    } = useFetchApi<CreditsType>({
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