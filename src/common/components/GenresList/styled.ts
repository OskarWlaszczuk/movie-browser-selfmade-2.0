import styled from "styled-components";

export const StyledGenres = styled.ul`
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    align-items: flex-start;
    margin: 0;
    padding: 0;
`;

export const Genre = styled.li`
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.mystic};
    padding: 8px 16px;
    list-style: none;
    border-radius: 5px;
    flex-basis: 30%;
    text-align: center;
    white-space: nowrap;

    @media (max-width: ${({ theme }) => theme.breakpoints.tabletS}) {
        font-size: ${({ theme }) => theme.fontSizes.xs};
        padding: 4px 8px;
    }
`;