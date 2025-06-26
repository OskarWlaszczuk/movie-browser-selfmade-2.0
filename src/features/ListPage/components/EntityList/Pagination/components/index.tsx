import { OrUndefined } from "../../../../../../common/aliases/types/OrUndefined";
import { MoviesList, PeopleList } from "../../../../types/entityList.types";
import { PaginationButtonGroup } from "./PaginationButtonGroup";
import { usePaginationButtons } from "../hooks/usePaginationButtons";
import { PageIndicator, PageNumber, PaginationContainer } from "./styled";

type ListType = PeopleList | MoviesList;

interface PaginationProps {
    currentPage: OrUndefined<ListType["page"]>;
    totalPages: OrUndefined<ListType["total_pages"]>;
}

export const Pagination = ({ currentPage, totalPages }: PaginationProps) => {
    const { paginationBackButtons, paginationForwordButtons } = usePaginationButtons(currentPage, totalPages);

    return (
        <PaginationContainer>
            <PaginationButtonGroup buttons={paginationBackButtons} />
            <PageIndicator>Page <PageNumber>{currentPage} </PageNumber>of<PageNumber> {totalPages}</PageNumber></PageIndicator>
            <PaginationButtonGroup buttons={paginationForwordButtons} />
        </PaginationContainer>
    );
};