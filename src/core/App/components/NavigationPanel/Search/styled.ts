import styled from "styled-components";
import { ReactComponent as SearchIcon } from "../Icons/Search.svg";

export const SearchPanel = styled.div`
    display: flex;
    flex-basis: 30%;
    align-items: center;
    gap: 16px;
    padding: 12px 22px;
    border: 1px solid ${({ theme }) => theme.colors.mystic};
    border-radius: 33px;
    background-color: ${({ theme }) => theme.colors.white};
    
    @media (max-width: ${({ theme }) => theme.breakpoints.laptopS}) {
        flex-grow:1;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileM}) {
        padding: 14px 16px;
        gap: 10px;
    }
`;

export const StyledSearchIcon = styled(SearchIcon)`
    max-width: 40px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileM}) {
        max-width: 20px;
    }
`;

export const Input = styled.input`
    border: none;
    background-color: transparent;
    font-size:  ${({ theme }) => theme.fontSizes.m};
    font-weight:  ${({ theme }) => theme.fontWeights.regular};
    line-height: 24px;
    
    &::placeholder {
        color: ${({ theme }) => theme.colors.waterloo};
    }

    &:focus-visible{
        outline: none;
    }
`;