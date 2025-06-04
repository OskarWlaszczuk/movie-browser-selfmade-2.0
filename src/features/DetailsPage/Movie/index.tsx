import { useParams } from "react-router-dom"
import { DetailsPage } from "../index"
import { useFetchApi } from "../../../common/hooks/useFetchApi";
import { apiUrls } from "../../../common/constants/pictureConfigs";
import { useCredits } from "../../../common/hooks/useCredits";
import { MovieCreditsApiResponse } from "../../../common/aliases/interfaces/creditsApiResponses.types";
import { MovieDetails } from "../../../common/aliases/interfaces/movie.types";

export const Movie = () => {
    const { movieId } = useParams();

    const { creditsSectionsData, creditsStatus } = useCredits<MovieCreditsApiResponse>(movieId!, `movie/${movieId}/credits`);
    const { status: movieStatus, data: movie } = useFetchApi<MovieDetails>({
        queryKey: "movieDetails",
        url: `${apiUrls.base}/movie/${movieId}`,
        urlDependencies: [movieId!]
    });

    return (
        <DetailsPage
            details={movie!}
            sectionsData={creditsSectionsData}
            fetchStatuses={[creditsStatus, movieStatus]}
        />
    );
};