import styled from "styled-components";

export const PaginationContainer = styled.section`
    display: flex;
    justify-content: center;
`;

export const PageIndicator = styled.div`
    font-size: ${({ theme }) => theme.fontSizes.m};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    color: ${({ theme }) => theme.colors.waterloo};
`;

export const PageNumber = styled.b`
    color: ${({ theme }) => theme.colors.black};
`;