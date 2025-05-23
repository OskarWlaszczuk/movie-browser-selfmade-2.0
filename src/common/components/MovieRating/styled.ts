import styled from "styled-components";
import { ReactComponent as StarIcon } from "./Icons/Star.svg";

export const StyledMovieRating = styled.section`
    display: flex;
    gap: 12px;
    align-items: end;
    grid-area: movieRating;
    white-space: nowrap;

    @media (max-width: ${({ theme }) => theme.breakpoints.tabletS}) {
        gap: 8px;
    }
`;

export const StyledStarIcon = styled(StarIcon)`
    width: 24px;
`;

export const RatingScore = styled.strong`
    font-size: ${({ theme }) => theme.fontSizes.m};
`;