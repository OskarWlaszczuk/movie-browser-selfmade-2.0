import { OrUndefined } from "../../../../../../common/aliases/types/OrUndefined";
import { URL_QUERY_PARAM_KEYS } from "../../../../../../common/constants/URL_QUERY_PARAM_KEYS";
import { useReplaceQueryParameter } from "../../../../../../common/hooks/useReplaceQueryParameter";
import { MoviesList, PeopleList } from "../../../../types/entityList.types";
import { StyledNextPageIcon, StyledPreviousPageIcon } from "../components/PaginationButtonGroup/styled";
import { PaginationButtonData } from "../types/PaginationButtonData";

type ListType = PeopleList | MoviesList;


export const usePaginationButtons = (
    currentPage: OrUndefined<ListType["page"]>,
    totalPages: OrUndefined<ListType["total_pages"]>
) => {
    
    const replaceQueryParameter = useReplaceQueryParameter();

    const isFirstPage = currentPage === 1;
    const isLastPage = currentPage === totalPages;

    const paginationBackButtons: PaginationButtonData[] = [
        {
            clickHandler: () => replaceQueryParameter([{
                key: URL_QUERY_PARAM_KEYS.PAGE,
                value: 1,
            }]),
            label: <><StyledPreviousPageIcon $isButtonDisabled={isFirstPage} /> <span>First</span></>,
            disabledCondition: isFirstPage,
        },
        {
            clickHandler: () => replaceQueryParameter([{
                key: URL_QUERY_PARAM_KEYS.PAGE,
                value: isFirstPage ? currentPage : currentPage! - 1
            }]),
            label: <><StyledPreviousPageIcon $isButtonDisabled={isFirstPage} /> <span>Previous</span></>,
            disabledCondition: isFirstPage,
        },
    ];

    const paginationForwordButtons: PaginationButtonData[] = [
        {
            clickHandler: () => replaceQueryParameter([{
                key: URL_QUERY_PARAM_KEYS.PAGE,
                value: isLastPage ? currentPage! : currentPage! + 1
            }]),
            label: <><span>Next</span> <StyledNextPageIcon $isButtonDisabled={isLastPage} /></>,
            disabledCondition: isLastPage,
        },
        {
            clickHandler: () => replaceQueryParameter([{
                key: URL_QUERY_PARAM_KEYS.PAGE,
                value: totalPages!,
            }]),
            label: <><span>Last</span> <StyledNextPageIcon $isButtonDisabled={isLastPage} /></>,
            disabledCondition: isLastPage,
        },
    ];

    return { paginationBackButtons, paginationForwordButtons, totalPages };
};