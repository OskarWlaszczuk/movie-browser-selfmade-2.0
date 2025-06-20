import styled, { css } from "styled-components";

interface TilesListProps {
    $moreItems?: boolean;
}

export const TilesList = styled.div<TilesListProps>`
    display: grid;
    grid-gap: 24px;
    grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));


${({ $moreItems }) => $moreItems && css`
    grid-template-columns: repeat(auto-fill, minmax(195px, 1fr));
`};
`;