import styled from "styled-components";

export const StyledValue = styled.span`
    color:  ${({ theme }) => theme.colors.black};

    @media (max-width: ${({ theme }) => theme.breakpoints.laptopXS}) {
        font-size:  ${({ theme }) => theme.fontSizes.xs};
    }
`;