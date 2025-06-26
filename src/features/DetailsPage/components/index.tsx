import { nanoid } from "@reduxjs/toolkit";
import { useCombinedFetchStatus } from "../../../common/hooks/useCombinedFetchStatus";
import { useFetchGenres } from "../../../common/hooks/useFetchGenres";
import { renderHorizontalTile } from "../functions/renderHorizontalTile";
import { TilesListSection } from "../../../common/components/TilesListSection";
import { Main } from "../../../common/components/Main";
import { useDetailsPageData } from "../hooks/useDetailsPageData";
import { TileEntityId } from "../../../common/aliases/interfaces/TileEntity";

interface EntityDetailsProps {
    id: TileEntityId;
    detailsEndpoint: string;
    creditsEndpoint: string;
}

export const EntityDetails = ({ id, creditsEndpoint, detailsEndpoint }: EntityDetailsProps) => {
    const genresStatus = useFetchGenres();

    const { details, creditsSectionsData, detailsPageDataStatuses, detailsPausedFlags } = useDetailsPageData({ id, creditsEndpoint, detailsEndpoint });
    const combinedFetchStatus = useCombinedFetchStatus([...detailsPageDataStatuses, genresStatus], detailsPausedFlags);

    return (
        <>
            <Main
                content={
                    <>
                        {renderHorizontalTile(details!)}
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