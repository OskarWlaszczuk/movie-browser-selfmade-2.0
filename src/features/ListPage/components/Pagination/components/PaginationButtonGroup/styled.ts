import styled from "styled-components";
import { ReactComponent as NextPageIcon } from "../../NextPageIcon.svg"
import { ReactComponent as PreviousPageIcon } from "../../PreviousPageIcon.svg"

export const PaginationButtonsContainer = styled.div`
    display: flex;
`;

export const PaginationButtons = styled.button`
    font-size: ${({ theme }) => theme.fontSizes.s};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    background-color: ${({ theme }) => theme.colors.pattensBlue};
    border: none;
    border-radius:5px;
    transition: 0.3s;
    display: flex;
    justify-content:center;
    gap: 8px;

    &:disabled {
        background-color: ${({ theme }) => theme.colors.mystic};
    }

    &:hover {
        filter: brightness(102%);
    }

`;

export const StyledNextPageIcon = styled(NextPageIcon)`
    path {
        fill: ${({ theme }) => theme.colors.scienceBlue};
    }
`;

export const StyledPreviousPageIcon = styled(PreviousPageIcon)`
    path {
        fill: ${({ theme }) => theme.colors.waterloo};
    }
`;