import styled, { css } from "styled-components";

interface TilesListProps {
    $moreItems?: boolean;
}

const mobileGap = css`
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileS}) {
            grid-gap: 16px;
    }
`;

export const TilesList = styled.div<TilesListProps>`
    display: grid;
    grid-gap:24px;
    grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));

    ${mobileGap}

${({ $moreItems }) => $moreItems && css`
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileS}) {
        grid-template-columns: repeat(auto-fill,minmax(120px, 1fr));
    }
`};
`;