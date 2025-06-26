import { nanoid } from "@reduxjs/toolkit";
import { useCombinedFetchStatus } from "../../../common/hooks/useCombinedFetchStatus";
import { useFetchGenres } from "../../../common/hooks/useFetchGenres";
import { renderHorizontalTile } from "../functions/renderHorizontalTile";
import { TilesListSection } from "../../../common/components/TilesListSection";
import { Main } from "../../../common/components/Main";
import { useDetailsPageData } from "../hooks/useDetailsPageData";
import { entitiesDetailsEndpoints } from "../../../common/constants/apiEndpoints";
import { useCreditsSections } from "../hooks/useCreditsSections";
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
    } = useDetailsPageData(endpointEntityType);

    const creditsSectionsData = useCreditsSections(entityCredits);

    const combinedFetchStatus = useCombinedFetchStatus([...detailsPageDataStatuses, genresStatus], detailsPausedFlags);

    return (
        <>
            <Main
                content={
                    <>
                        {renderHorizontalTile(entityDetails!)}
                        {
                            creditsSectionsData.map(sectionData => (
                                <TilesListSection key={nanoid()} {...sectionData} />
                            ))
                        }
                    </>
                }
                combinedFetchStatus={combinedFetchStatus}
                errorMessage="Details not found"
            />
        </>
    );
};