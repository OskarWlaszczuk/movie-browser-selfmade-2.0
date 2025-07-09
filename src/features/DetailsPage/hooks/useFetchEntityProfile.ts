import { useFetchApi } from "../../../common/hooks/useFetchApi";
import { CreditsTypeUnion } from "../types/credits.types";
import { DetailedEntityItem } from "../../../common/aliases/types/DetailedEntityItem";
import { EntitySingularType } from "../../../common/aliases/types/entityTypes.types";

export const useFetchEntityProfile = <
    DetailsType extends DetailedEntityItem,
    CreditsType extends CreditsTypeUnion
>(entityPathSegment: EntitySingularType, id: string) => {

    const detailsEndpoint = `${entityPathSegment}/${id}`;
    const creditsEndpoint = `${detailsEndpoint}/credits`;

    const endpointDependecies = [id!];

    const {
        status: detailsStatus,
        data: details,
        isPaused: isDetailsPaused
    } = useFetchApi<DetailsType>({
        queryKey: `${entityPathSegment} details`,
        endpoint: detailsEndpoint,
        urlDependencies: endpointDependecies
    });

    const {
        status: creditsStatus,
        data: credits,
        isPaused: isCreditsPaused
    } = useFetchApi<CreditsType>({
        queryKey: `${entityPathSegment} credits`,
        endpoint: creditsEndpoint,
        urlDependencies: endpointDependecies,
    });

    const profileStatuses = [detailsStatus, creditsStatus];
    const profilePausedFlags = [isCreditsPaused, isDetailsPaused];

    return {
        details,
        credits,
        profileStatuses,
        profilePausedFlags,
    };
};