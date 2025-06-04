import { useParams } from "react-router-dom"
import { useCredits } from "../../hooks/useCredits";
import { MovieCreditsApiResponse } from "../../types/creditsApiResponses.types";
import { MovieDetails } from "../../../../common/aliases/interfaces/movie.types";
import { useFetchDetails } from "../../hooks/useFetchDetails";
import { DetailsPage } from "..";

export const Movie = () => {
    const { movieId } = useParams();

    const { creditsSectionsData, creditsStatus } = useCredits<MovieCreditsApiResponse>(movieId!, `movie/${movieId}/credits`);
    const { details, detailsStatus } = useFetchDetails<MovieDetails>(movieId!, `movie/${movieId}`);

    return (
        <DetailsPage
            details={details!}
            sectionsData={creditsSectionsData}
            fetchStatuses={[creditsStatus, detailsStatus]}
        />
    );
};