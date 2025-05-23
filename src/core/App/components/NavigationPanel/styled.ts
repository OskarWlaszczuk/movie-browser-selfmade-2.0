import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as AppLogo } from "./Icons/Video.svg";

export const StyledNavPanel = styled.nav`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.black};
    padding: 24px;
    gap: 24px;
`;

export const NavPanelInner = styled.div`
    display: flex;
    gap: 80px;

    @media (max-width: ${({ theme }) => theme.breakpoints.laptopS}) {
        flex-grow:1;
        gap: 16px;
        justify-content: center;
    }
`;

export const NavItemsList = styled.div`
    display: flex;
    gap: 16px;
`;

export const NavItem = styled(NavLink)`
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
    font-size:  ${({ theme }) => theme.fontSizes.s};
    font-weight:  ${({ theme }) => theme.fontWeights.semiBold};
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

    @media (max-width: ${({ theme }) => theme.breakpoints.laptopS}) {
        gap: 12px;
        padding: 8px 12px;
    }
`;

export const AppTitle = styled(NavLink)`
    display:flex;
    align-items: center;
    gap: 12px;
    font-size:  ${({ theme }) => theme.fontSizes.xl};
    font-weight:  ${({ theme }) => theme.fontWeights.medium};
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
    white-space: nowrap;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileXL}) {
        font-size: ${({ theme }) => theme.fontSizes.xs};
    }
`;

export const StyledAppLogo = styled(AppLogo)`
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileM}) {
        width: 13px;
    }
`;