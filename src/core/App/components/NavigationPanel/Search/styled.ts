import styled from "styled-components";
import { ReactComponent as SearchIcon } from "./Icons/Search.svg";

export const SearchPanel = styled.div`
    display: flex;
    flex-basis: 30%;
    align-items: center;
    gap: 16px;
    padding: 12px 22px;
    border: 1px solid ${({ theme }) => theme.colors.mystic};
    border-radius: 33px;
    background-color: ${({ theme }) => theme.colors.white};
`;

export const StyledSearchIcon = styled(SearchIcon)`
    max-width: 40px;
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