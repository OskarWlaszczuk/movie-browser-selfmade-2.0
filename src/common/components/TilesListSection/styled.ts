import styled from "styled-components";

// export const TilesListContainer = styled.section`
//     /* display: flex;
//     flex-direction: column;
//     align-items: center */
//     margin: auto;
// `;

export const TilesList = styled.div`
    /* grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 24px; */
    /* max-width: calc(4 * 340px + 3 * 24px); */
    display: grid;
    grid-gap: 24px;
    grid-template-columns: repeat(auto-fit, minmax(270px, 1fr))
`;