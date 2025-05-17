import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavPanel = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.black};
    height: 94px;
`;

export const NavItemsList = styled.div`
    display: flex;
    gap: 16px;
`;

export const NavItem = styled(NavLink)`
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
    font-size: 14px;
    font-weight: 600;
    border: 1px solid transparent;
    padding: 12px 24px;
    transition: 0.5s;
     border-radius: 24px;

    &:hover {
        border: 1px solid ${({ theme }) => theme.colors.white};
        transform: scale(1.05);
    }
    
    &.active {
        border: 1px solid ${({ theme }) => theme.colors.white};
        border-radius: 24px;
    };
`;