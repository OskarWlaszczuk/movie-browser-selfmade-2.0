import styled from "styled-components";

export const MainSection = styled.main`
`;

export const MainContent = styled.section`
    margin: 20px auto;
    display: flex;
    flex-direction: column;
    width: 85%;
    gap: 64px;

    @media (max-width: ${({theme}) => theme.breakpoints.tablesS}) {
        gap: 21px;
    }
`;