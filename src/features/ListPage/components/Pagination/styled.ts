import styled from "styled-components";

export const PageIndicator = styled.div`
    font-size: ${({ theme }) => theme.fontSizes.m};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    color: ${({ theme }) => theme.colors.waterloo};
`;

export const PageNumber = styled.b`
    color: ${({ theme }) => theme.colors.black};
`;