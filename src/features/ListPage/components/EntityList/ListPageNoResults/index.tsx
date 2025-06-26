import { URLQueryParams } from "../../../../../common/aliases/interfaces/URLSearchParams"
import { SectionHeader } from "../../../../../common/components/SectionHeader"
import { StyledNoResultsIcon } from "./styled";

interface ListPageNoResultsProps {
    search: URLQueryParams["search"];
}

export const NoResultsMessage = ({ search }: ListPageNoResultsProps) => (
    <>
        <SectionHeader text={`Sorry there are no results for "${search}"`} setAsPageTitle />
        <StyledNoResultsIcon />
    </>
);