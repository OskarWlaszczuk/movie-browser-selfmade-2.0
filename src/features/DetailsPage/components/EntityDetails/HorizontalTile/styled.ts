import styled from "styled-components";

export const MovieYear = styled.span`
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    font-size: ${({ theme }) => theme.fontSizes.l};
    color:  ${({ theme }) => theme.colors.black};
`;