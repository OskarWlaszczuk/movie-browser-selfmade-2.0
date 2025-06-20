import { DetailedMovieItem } from "../../../common/aliases/interfaces/movie.types";
import { DetailedPersonItem } from "../../../common/aliases/interfaces/person.types";
import { TileEntityId } from "../../../common/aliases/interfaces/TileEntity";
import { MovieCreditsApiResponse, PersonCreditsApiResponse } from "../types/creditsApiResponses.types";
import { useCredits } from "./useCredits";
import { useFetchDetails } from "./useFetchDetails";

interface UseDetailsPageDataProps {
    id: TileEntityId;
    detailsEndpoint: string;
    creditsEndpoint: string;
}

export const useDetailsPageData = <TDetails extends DetailedMovieItem | DetailedPersonItem, TCredits extends MovieCreditsApiResponse | PersonCreditsApiResponse>({
    id,
    detailsEndpoint,
    creditsEndpoint,
}: UseDetailsPageDataProps) => {
    const { details, detailsStatus } = useFetchDetails<TDetails>(id, detailsEndpoint);
    const { creditsSectionsData, creditsStatus } = useCredits<TCredits>(id, creditsEndpoint);

    const detailsPageDataStatuses = [detailsStatus, creditsStatus];

    return {
        details,
        creditsSectionsData,
        detailsPageDataStatuses,
    };
};