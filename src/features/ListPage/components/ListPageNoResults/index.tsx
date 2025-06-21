import { SearchQueryParams } from "../../../../common/aliases/interfaces/SearchQueryParams"
import { IconWrapper } from "../../../../common/components/IconWrapper";
import { SectionHeader } from "../../../../common/components/SectionHeader"
import { StyledNoResultsIcon } from "./styled";

interface ListPageNoResultsProps {
    search: SearchQueryParams["search"];
}

export const ListPageNoResults = ({ search }: ListPageNoResultsProps) => (
    <>
        <SectionHeader text={`Sorry there are no results for "${search}"`} setAsPageTitle />
        <IconWrapper>
            <StyledNoResultsIcon />
        </IconWrapper>
    </>
);