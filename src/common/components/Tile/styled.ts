import styled from "styled-components";

export const StyledTile = styled.li`
    display: flex;
    flex-direction: column;
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.white};
    padding: 16px;
`;