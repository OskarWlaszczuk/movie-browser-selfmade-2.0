import styled from "styled-components";

export const MovieYear = styled.span`
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    font-size: ${({ theme }) => theme.fontSizes.l};
    color:  ${({ theme }) => theme.colors.black};

    @media (max-width: ${({ theme }) => theme.breakpoints.laptopXS}) {
        font-size:  ${({ theme }) => theme.fontSizes.s};
        color:  ${({ theme }) => theme.colors.waterloo};
    }
`;