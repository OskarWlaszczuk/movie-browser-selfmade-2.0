import { useQueryParameter } from "../../../../common/hooks/useQueryParameter";
import { PaginationButtonGroup } from "./components/PaginationButtonGroup";
import { usePaginationButtons } from "./hooks/usePaginationButtons";
import { PageIndicator, PageNumber } from "./styled";

export const Pagination = () => {
    const { pageNumber } = useQueryParameter();
    const { paginationBackButtons, paginationForwordButtons, totalPages } = usePaginationButtons(pageNumber);

    return (
        <>
            <PaginationButtonGroup buttons={paginationBackButtons} />
            <PageIndicator>Page <PageNumber>{pageNumber} </PageNumber>of<PageNumber>{totalPages}</PageNumber></PageIndicator>
            <PaginationButtonGroup buttons={paginationForwordButtons} />
        </>
    );
};