import styled from "styled-components";
import { ReactComponent as PaginationIcon } from "../../icons/PaginationIcon.svg"

export const PaginationButtonsContainer = styled.div`
    display: flex;
    gap: 12px;
`;

export const PaginationButton = styled.button`
    font-size: ${({ theme }) => theme.fontSizes.s};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    background-color: ${({ theme }) => theme.colors.pattensBlue};
    border: none;
    border-radius:5px;
    transition: 0.3s;
    display: flex;
    justify-content:center;
    gap: 8px;
    padding: 8px 16px;

    &:disabled {
        background-color: ${({ theme }) => theme.colors.mystic};
    }

    &:hover {
        filter: brightness(102%);
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.tablesS}) {
        padding: 7px 12px;
        gap: 4px;
    }

`;

interface StyledPaginationIconProps {
    $isButtonDisabled: boolean;
}

export const StyledPreviousPageIcon = styled(PaginationIcon) <StyledPaginationIconProps>`
    path {
        fill: ${({ theme, $isButtonDisabled }) =>
        $isButtonDisabled ? theme.colors.waterloo : theme.colors.scienceBlue
    };
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.tablesS}) {
        width: 5px;
    }
`;

export const StyledNextPageIcon = styled(StyledPreviousPageIcon)`
    transform: scaleX(-1);
`;