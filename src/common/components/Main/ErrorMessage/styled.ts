import styled from "styled-components";
import { ReactComponent as ErrorIcon } from "./ErrorIcon.svg"
import { NavLink } from "react-router-dom";

export const ErrorMessageWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 16px; 

    @media (max-width: ${({ theme }) => theme.breakpoints.tablesS}) {
        gap: 8px;
    }
`;

export const StyledErrorIcon = styled(ErrorIcon)`
    @media (max-width: ${({ theme }) => theme.breakpoints.tablesS}) {
        width: 64px;
        height: 64px;
    }
`;

export const Message = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.l};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    margin: 0;
    text-align: center;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablesS}) {
        gap: 8px;
        font-size: ${({ theme }) => theme.fontSizes.m};
    }
`;

export const HomepageLink = styled(NavLink)`
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.scienceBlue};
    font-size: ${({ theme }) => theme.fontSizes.s};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    text-align: center;
    padding: 16px 24px;
    border-radius: 5px;
    text-decoration: none;

        @media (max-width: ${({ theme }) => theme.breakpoints.tablesS}) {
        gap: 8px;
        font-size: ${({ theme }) => theme.fontSizes.xs};
    }
`