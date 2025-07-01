import { URLQueryParams } from "../../../../../common/aliases/interfaces/URLSearchParams"
import { IconWrapper } from "../../../../../common/components/IconWrapper";
import { SectionHeader } from "../../../../../common/components/SectionHeader"
import { StyledNoResultsIcon } from "./styled";

interface ListPageNoResultsProps {
    search: URLQueryParams["search"];
}

export const NoResultsMessage = ({ search }: ListPageNoResultsProps) => (
    <>
        <SectionHeader text={`Sorry there are no results for "${search}"`} setAsPageTitle />
        <IconWrapper>
            <StyledNoResultsIcon />
        </IconWrapper>
    </>
);