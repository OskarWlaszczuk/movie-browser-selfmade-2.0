import styled from "styled-components";

export const PaginationContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 24px;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablesS}) {
        gap: 8px;
    }
`;

export const PageIndicator = styled.div`
    font-size: ${({ theme }) => theme.fontSizes.m};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    color: ${({ theme }) => theme.colors.waterloo};
    text-align: center;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablesS}) {
        font-size: ${({ theme }) => theme.fontSizes.xs};
    }
`;

export const PageNumber = styled.b`
    color: ${({ theme }) => theme.colors.black};
`;