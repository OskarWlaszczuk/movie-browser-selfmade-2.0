import { TileEntityId } from "../../../common/aliases/interfaces/TileEntity";
import { useCredits } from "./useCredits";
import { useFetchEntityDetails } from "./useFetchEntityDetails";

interface UseDetailsPageDataProps {
    id: TileEntityId;
    detailsEndpoint: string;
    creditsEndpoint: string;
}

export const useDetailsPageData = ({ id, detailsEndpoint, creditsEndpoint }: UseDetailsPageDataProps) => {
    const { details, detailsStatus } = useFetchEntityDetails(id, detailsEndpoint);
    const { creditsSectionsData, creditsStatus } = useCredits(id, creditsEndpoint);

    const detailsPageDataStatuses = [detailsStatus, creditsStatus];

    return {
        details,
        creditsSectionsData,
        detailsPageDataStatuses,
    };
};