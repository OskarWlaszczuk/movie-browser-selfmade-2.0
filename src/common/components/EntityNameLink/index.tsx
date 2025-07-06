import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const EntityNameLink = styled(NavLink)`
    color: ${({ theme }) => theme.colors.ebb};
    background-color: ${({ theme }) => theme.colors.abbey};
    padding: 8px 16px;
    list-style: none;
    border-radius: 5px;
    text-align: center;
    white-space: nowrap;
    font-size:  ${({ theme }) => theme.fontSizes.s};
    text-decoration: none;

    &:hover {
        filter: brightness(110%);
        color: ${({ theme }) => theme.colors.white};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.laptopXS}) {
        font-size: ${({ theme }) => theme.fontSizes.xs};
        padding: 4px 8px;
    }
`;