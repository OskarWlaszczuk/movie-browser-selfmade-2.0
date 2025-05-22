import styled, { css } from "styled-components";

const sharedHeaderStyles = css`
    font-size: ${({ theme }) => theme.fontSizes.title};
    font-weight: ${({ theme }) => theme.fontWeights.semiBold};
    margin:  0 0 24px;
`;

export const StyledSectionHeader = styled.header`
  ${sharedHeaderStyles}
`;

export const MainPageHeader = styled.h1`
    ${sharedHeaderStyles}
`;