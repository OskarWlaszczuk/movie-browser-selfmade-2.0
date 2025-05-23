import styled from "styled-components";

export const StyledTile = styled.li`
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.white};
    padding: 16px;
    transition: 0.4s;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: min-content;
    grid-gap: 12px;

    &:hover{
        scale: 103%
    }
`;

export const InfoWrapper = styled.article`
    display: flex;
    flex-direction: column;
    gap: 8px;
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