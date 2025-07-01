import { SimplefiedMovieItem } from "../../../aliases/interfaces/movie.types";
import { OrUndefined } from "../../../aliases/types/OrUndefined";
import { MetaData } from "../../MetaData";
import { RatingScore, StyledMovieRating, StyledStarIcon } from "./styled";

interface MovieRatingProps {
    voteAverage: OrUndefined<SimplefiedMovieItem["vote_average"]>;
    voteCount: OrUndefined<SimplefiedMovieItem["vote_count"]>;
}

export const MovieRating = ({ voteAverage, voteCount }: MovieRatingProps) => {
    const areVotesAvailable = voteCount !== 0;

    return (
        <StyledMovieRating>
            {areVotesAvailable && (
                <>
                    <StyledStarIcon />
                    <RatingScore>{voteAverage?.toFixed(1).replace('.', ',')}</RatingScore>
                </>
            )}
            <MetaData>{areVotesAvailable ? `${voteCount} votes` : "No votes yet"}</MetaData>
        </StyledMovieRating>
    );
};