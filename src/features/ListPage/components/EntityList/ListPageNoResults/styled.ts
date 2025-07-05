import styled from "styled-components"
import { ReactComponent as NoResultsIcon } from "./icons/NoResultsIcon.svg"

export const StyledNoResultsIcon = styled(NoResultsIcon)`
    @media (max-width: ${({ theme }) => theme.breakpoints.tablesS}) {
        width: 200px;
        height: 200px;
    }
`;
