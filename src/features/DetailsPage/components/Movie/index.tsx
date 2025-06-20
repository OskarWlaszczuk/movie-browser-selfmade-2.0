import { useParams } from "react-router-dom"
import { useCredits } from "../../hooks/useCredits";
import { MovieCreditsApiResponse } from "../../types/creditsApiResponses.types";
import { DetailedMovieItem } from "../../../../common/aliases/interfaces/movie.types";
import { useFetchDetails } from "../../hooks/useFetchDetails";
import { DetailsPage } from "..";
import { creditsEndpoints, detailsEndpoints } from "../../../../common/constants/apiEndpoints";

export const Movie = () => {
    const { movieId } = useParams();
    const numericMovieId = Number(movieId);

    const { creditsSectionsData, creditsStatus } = useCredits<MovieCreditsApiResponse>(
        numericMovieId,
        creditsEndpoints.getMovieCredits(numericMovieId),
    );
    
    const { details, detailsStatus } = useFetchDetails<DetailedMovieItem>(
        numericMovieId,
        detailsEndpoints.getMovieDetails(numericMovieId),
    );

    return (
        <DetailsPage
            details={details!}
            sectionsData={creditsSectionsData}
            fetchStatuses={[creditsStatus, detailsStatus]}
        />
    );
};