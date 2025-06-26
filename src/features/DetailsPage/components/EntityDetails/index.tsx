import { useCombinedFetchStatus } from "../../../../common/hooks/useCombinedFetchStatus";
import { useFetchGenres } from "../../../../common/hooks/useFetchGenres";
import { renderHorizontalTile } from "../../functions/renderHorizontalTile";
import { Main } from "../../../../common/components/Main";
import { useFetchDetailsPageData } from "../../hooks/useFetchDetailsPageData";
import { entitiesDetailsEndpoints } from "../../../../common/constants/apiEndpoints";
import { Credits } from "./Credits";

type EntityDetailsEndpoints = typeof entitiesDetailsEndpoints[keyof typeof entitiesDetailsEndpoints];
interface EntityDetailsProps {
    endpointEntityType: EntityDetailsEndpoints;
}

export const EntityDetails = ({ endpointEntityType }: EntityDetailsProps) => {
    const genresStatus = useFetchGenres();

    const {
        entityDetails,
        entityCredits,
        detailsPageDataStatuses,
        detailsPausedFlags,
    } = useFetchDetailsPageData(endpointEntityType);

    const combinedFetchStatus = useCombinedFetchStatus([...detailsPageDataStatuses, genresStatus], detailsPausedFlags);

    return (
        <>
            <Main
                content={
                    <>
                        {renderHorizontalTile(entityDetails!)}
                        <Credits credists={entityCredits} />
                    </>
                }
                combinedFetchStatus={combinedFetchStatus}
                errorMessage="Details not found"
            />
        </>
    );
};