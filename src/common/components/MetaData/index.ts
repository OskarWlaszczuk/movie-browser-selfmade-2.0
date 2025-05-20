import styled from "styled-components";

export const MetaData = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.m};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    color: ${({ theme }) => theme.colors.waterloo};
`;