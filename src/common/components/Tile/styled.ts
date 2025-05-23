import styled from "styled-components";

export const StyledTile = styled.li`
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.white};
    padding: 16px;
    transition: 0.4s;
    display: grid;
    grid-template-areas: 
        "picture"
        "infoWrapper"
        "movieRating";
    grid-template-columns: 100%;
    grid-template-rows: min-content;
    grid-gap: 12px;
    border-radius: 5px;
    box-shadow: 0px 0px 7px -1px #5a575747;

    @media (max-width: ${({ theme }) => theme.breakpoints.laptopS}) {
        grid-template-columns: repeat(2, 1fr);
        align-items: start;
        grid-template-areas: 
        "picture infoWrapper"
        "picture movieRating"
        "picture ..."
        ;
    }

    &:hover{
        scale: 103%
    }
`;

export const InfoWrapper = styled.article`
    display: flex;
    flex-direction: column;
    gap: 8px;
    grid-area: infoWrapper;
`;

export const Title = styled.header`
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    font-size:  ${({ theme }) => theme.fontSizes.l};
    line-height: 130%;
`;

export const SubTitle = styled.p`
    color: ${({ theme }) => theme.colors.waterloo};
    font-size:   ${({ theme }) => theme.fontSizes.m};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    margin: 0;
`;