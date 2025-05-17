import styled from "styled-components";

export const StyledTile = styled.li`
    display: flex;
    flex-direction: column;
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.white};
    padding: 16px;
`;

export const Picture = styled.img`
    width: 100%;
    height: 50px;
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
`;