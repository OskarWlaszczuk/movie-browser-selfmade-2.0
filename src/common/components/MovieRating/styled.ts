import styled from "styled-components";
import { ReactComponent as StarIcon } from "./Icons/Star.svg";

export const StyledMovieRating = styled.section`
    display: flex;
    gap: 12px;
    align-items: end;
    grid-area: movieRating;
    white-space: nowrap;

    @media (max-width: ${({ theme }) => theme.breakpoints.laptopXS}) {
        gap: 8px;
    }
`;

export const StyledStarIcon = styled(StarIcon)`
    width: 24px;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.laptopXS}) {
        width: 16px;
    }
`;

export const RatingScore = styled.strong`
    font-size: ${({ theme }) => theme.fontSizes.m};

    @media (max-width: ${({ theme }) => theme.breakpoints.laptopXS}) {
        font-size: ${({ theme }) => theme.fontSizes.xs};
    }
`;