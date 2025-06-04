import { MovieItem } from "../../aliases/interfaces/movie.types";
import { MetaData } from "../MetaData";
import { RatingScore, StyledMovieRating, StyledStarIcon } from "./styled";

interface MovieRatingProps {
    voteAverage: MovieItem["vote_average"];
    voteCount: MovieItem["vote_count"];
}

export const MovieRating = ({ voteAverage, voteCount }: MovieRatingProps) => {
    const areVotesAvailable = voteCount !== 0;

    return (
        <StyledMovieRating>
            {areVotesAvailable && (
                <>
                    <StyledStarIcon />
                    <RatingScore>{voteAverage.toFixed(1).replace('.', ',')}</RatingScore>
                </>
            )}
            <MetaData>{areVotesAvailable ? `${voteCount} votes` : "No votes yet"}</MetaData>
        </StyledMovieRating>
    );
};