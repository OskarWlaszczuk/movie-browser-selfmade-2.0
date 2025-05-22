import styled from "styled-components";

export const MainSection = styled.main`

`;

export const MainContent = styled.section`
    background-color: ${({ theme }) => theme.colors.whisper};
    margin: 20px auto 0;
    display: flex;
    flex-direction: column;
    width: 90%;
`;