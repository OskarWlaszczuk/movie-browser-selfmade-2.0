import styled from "styled-components";

export const TilesListContainer = styled.section`
    
`;

export const TilesList = styled.div`
    justify-content: center;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 24px;
    max-width: calc(4 * 200px + 3 * 24px);
`;