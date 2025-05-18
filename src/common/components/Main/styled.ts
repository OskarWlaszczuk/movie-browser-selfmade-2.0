import styled from "styled-components";

export const MainSection = styled.main`
    grid-area: main;
    border-radius: 10px;
`;

export const MainContent = styled.div`
    background-color: ${({ theme }) => theme.colors.black};
    width: 100%;
    display: grid;
    grid-gap: 64px;
    padding: 20px;
`;