import { useCombinedFetchStatus } from "../../../../common/hooks/useCombinedFetchStatus";
import { useFetchGenres } from "../../../../common/hooks/useFetchGenres";
import { Main } from "../../../../common/components/Main";
import { useFetchDetailsPageData } from "../../hooks/useFetchDetailsPageData";
import { Credits } from "./Credits";
import { ApiEntityPathSegment } from "../../../../common/aliases/types/apiEndpointPaths.types.ts";
import { HorizontalTile } from "./HorizontalTile";
interface EntityDetailsProps {
    entityPathSegment: ApiEntityPathSegment;
}

export const EntityDetails = ({ entityPathSegment }: EntityDetailsProps) => {
    const genresStatus = useFetchGenres();

    const {
        entityDetails,
        entityCredits,
        detailsPageDataStatuses,
        detailsPausedFlags,
    } = useFetchDetailsPageData(entityPathSegment);

    const combinedFetchStatus = useCombinedFetchStatus([...detailsPageDataStatuses, genresStatus], detailsPausedFlags);

    return (
        <>
            <Main
                successContent={
                    <>
                        <HorizontalTile entityDetails={entityDetails} />
                        <Credits credists={entityCredits} />
                    </>
                }
                combinedFetchStatus={combinedFetchStatus}
                errorMessage="Details not found"
            />
        </>
    );
};