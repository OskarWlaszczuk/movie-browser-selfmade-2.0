import styled from "styled-components";

export const DescriptionWrapper = styled.p`
    margin: 0;

    @media (max-width: ${({ theme }) => theme.breakpoints.laptopXS}) {
        font-size:  ${({ theme }) => theme.fontSizes.s};
    }
`;