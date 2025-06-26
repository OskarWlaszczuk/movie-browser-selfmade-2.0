import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

interface StyledTileProps {
    $horizontalLayout?: boolean;
}

interface TitleProps {
    $horizontalLayout?: boolean;
}

export const HorizontalTile = styled.article`
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.white};
    padding: 16px;
    display: flex;
    
`;

export const StyledTile = styled(NavLink) <StyledTileProps>`
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.white};
    padding: 16px;
    transition: 0.4s;
    display: grid;
    grid-template-areas: 
        "picture"
        "infoWrapper"
        "movieRating"
    ;
    grid-template-columns: 100%;
    grid-template-rows: min-content;
    /* grid-template-rows: auto 1fr; */
    grid-gap: 12px;
    border-radius: 5px;
    box-shadow: 0px 0px 7px -1px #5a575747;
    text-decoration: none;

    @media (max-width: ${({ theme }) => theme.breakpoints.laptopS}) {
        grid-template-areas: 
            "picture infoWrapper"
            "picture movieRating"
            "picture ..."
        ;
        grid-template-columns: repeat(2, 1fr);
        align-items: start;
    }

    &:hover{
        scale: 103%
    }

    ${({ $horizontalLayout }) => $horizontalLayout && css`
        grid-template-columns: 312px;
        grid-template-areas: 
            "picture infoWrapper"
            "picture movieRating"
            "picture overview"
        ;

        @media (max-width: ${({ theme }) => theme.breakpoints.laptopS}) {
            grid-template-areas: 
                "picture infoWrapper"
                "picture movieRating"
                "picture overview"
            ;
        }
    `}
`;

export const InfoWrapper = styled.article`
    display: flex;
    flex-direction: column;
    gap: 8px;
    grid-area: infoWrapper;
`;

export const Title = styled.header<TitleProps>`
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    font-size:  ${({ theme }) => theme.fontSizes.l};
    line-height: 130%;
    word-break: break-word;

    @media (max-width: ${({ theme }) => theme.breakpoints.laptopXS}) {
        font-size:  ${({ theme }) => theme.fontSizes.m};
    }

${({ $horizontalLayout }) => $horizontalLayout && css`
        font-weight: ${({ theme }) => theme.fontWeights.semiBold};
        font-size:  ${({ theme }) => theme.fontSizes.title};
    `};
`;

export const Overview = styled.p`
    grid-area: overview;
    font-size:  ${({ theme }) => theme.fontSizes.l};
`

export const DetailsWrapper = styled.div`
    /* display: grid; */
`;