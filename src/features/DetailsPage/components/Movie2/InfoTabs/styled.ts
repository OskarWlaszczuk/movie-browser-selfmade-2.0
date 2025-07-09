import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const TabsInfoContainer = styled.section`

`;

export const TabsCategories = styled.div`
    display: flex;
    gap: 12px;
`;

export const TabCategory = styled(NavLink)<{ isActive: boolean }>`
    padding: 8px 16px;
    border-radius: 4px;
    text-decoration: none;
    font-weight: ${({ isActive }) => (isActive ? "bold" : "normal")};
    color: ${({ isActive, theme }) => (isActive ? theme.colors.scienceBlue : theme.colors.black)};
    background-color: ${({ isActive, theme }) => (isActive ? theme.colors.pattensBlue : "transparent")};
    cursor: pointer;

    &:hover {
        background-color: ${({ theme }) => theme.colors.pattensBlue};
    }
`;
