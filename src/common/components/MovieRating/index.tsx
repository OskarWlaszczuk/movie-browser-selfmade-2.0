import { Movie } from "../../aliases/interfaces/Movie";
import { MetaData } from "../MetaData";
import { RatingScore, StyledMovieRating, StyledStarIcon } from "./styled";

interface MovieRatingProps {
    rate: Movie["vote_average"];
    votesTotal: Movie["vote_count"];
}

export const MovieRating = ({ rate, votesTotal }: MovieRatingProps) => {
    return (
        <StyledMovieRating>
            <StyledStarIcon />
            <RatingScore>{rate}</RatingScore>
            <MetaData>{votesTotal} votes</MetaData>
        </StyledMovieRating>
    );
};