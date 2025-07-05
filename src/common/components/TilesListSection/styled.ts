import styled, { css } from "styled-components";

interface TilesListProps {
    $moreItems?: boolean;
}

export const TilesList = styled.div<TilesListProps>`
    display: grid;
    grid-gap:24px;
    grid-template-columns: repeat(auto-fill, minmax(288px, 1fr));

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileS}) {
        grid-gap: 16px;
        grid-template-columns: 1fr;
    }

${({ $moreItems }) => $moreItems && css`
    grid-template-columns: repeat(auto-fill, minmax(165px, 1fr));

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileS}) {
        grid-template-columns: repeat(2, 1fr);
    }
`};
`;