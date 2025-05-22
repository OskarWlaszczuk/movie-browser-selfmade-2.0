import styled from "styled-components";

export const MainSection = styled.main`

`;

export const MainContent = styled.section`
    background-color: ${({ theme }) => theme.colors.whisper};
    width: 100%;
    display: grid;
    grid-gap: 64px;
    padding: 20px;
`;