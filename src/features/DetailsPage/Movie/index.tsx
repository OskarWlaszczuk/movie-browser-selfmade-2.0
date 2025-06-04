import { useParams } from "react-router-dom"
import { DetailsPage } from "../index"
import { useCredits } from "../../../common/hooks/useCredits";
import { MovieCreditsApiResponse } from "../../../common/aliases/interfaces/creditsApiResponses.types";
import { MovieDetails } from "../../../common/aliases/interfaces/movie.types";
import { useFetchDetails } from "../../../common/hooks/useFetchDetails";

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