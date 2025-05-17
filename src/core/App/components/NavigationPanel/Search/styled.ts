import styled from "styled-components";
import { ReactComponent as SearchIcon } from "..Search.svg";



export const Search = styled.div`
    display: flex;
    flex-basis: 30%;
    align-items: center;
    gap: 16px;
    padding: 12px;
    padding-right: 16px;
    
    border: 1px solid ${({ theme }) => theme.colors.mystic};
    border-radius: 33px;
    background-color: ${({ theme }) => theme.colors.white};
`;

export const StyledSearchIcon = styled(SearchIcon)`
    margin-left: 12px;
    max-width: 40px;
`;


export const Input = styled.input`
    border: none;
    background-color: unset;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    width: 100%;
    
    &::placeholder {
        color: ${({ theme }) => theme.colors.waterloo};
    }

    &:focus-visible{
        outline: none;
    }
`;