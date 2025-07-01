import styled from "styled-components";
import { ReactComponent as MoviePlaceholder } from "../svgs/MoviePlaceholder.svg";
import { ReactComponent as PersonPlaceholder } from "../svgs/PersonPlaceholder.svg";

export const StyledPlaceholder = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.silver};
    border-radius: 8px;
    aspect-ratio: 2/ 3;
    width: 100%;
    grid-area: picture;
`;

export const StyledMoviePlaceholder = styled(MoviePlaceholder)`

`;

export const StyledPersonPlaceholder = styled(PersonPlaceholder)`

`;