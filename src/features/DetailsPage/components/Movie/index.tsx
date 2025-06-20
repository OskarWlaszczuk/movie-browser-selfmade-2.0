import { useParams } from "react-router-dom"
import { DetailsPage } from "..";
import { creditsEndpoints, detailsEndpoints } from "../../../../common/constants/apiEndpoints";

export const Movie = () => {
    const { movieId } = useParams();
    const numericMovieId = Number(movieId);

    return (
        <DetailsPage
            id={numericMovieId}
            creditsEndpoint={creditsEndpoints.getMovieCredits(numericMovieId)}
            detailsEndpoint={detailsEndpoints.getMovieDetails(numericMovieId)}
        />
    );
};