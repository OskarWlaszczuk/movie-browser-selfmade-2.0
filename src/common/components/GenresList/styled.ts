import styled from "styled-components";

export const StyledGenres = styled.ul`
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    justify-items: start;
    margin: 0;
    padding: 0;
`;

export const Genre = styled.li`
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.mystic};
    padding: 8px 16px;
    list-style: none;
    border-radius: 5px;
    flex-grow: 1;
    text-align: center;
`;