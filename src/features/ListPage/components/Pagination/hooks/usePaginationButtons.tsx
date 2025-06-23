import { SearchQueryParams } from "../../../../../common/aliases/interfaces/SearchQueryParams";
import { QUERY_PARAM_KEYS } from "../../../../../common/constants/QUERY_PARAM_KEYS";
import { useReplaceQueryParameter } from "../../../../../common/hooks/useReplaceQueryParameter";
import { StyledNextPageIcon, StyledPreviousPageIcon } from "../components/PaginationButtonGroup/styled";
import { PaginationButtonData } from "../types/PaginationButtonData";

export const usePaginationButtons = (pageNumber: SearchQueryParams["pageNumber"]) => {
    const replaceQueryParameter = useReplaceQueryParameter();
    const totalPages = 500;
    const isFirstPage = pageNumber === 1;
    const isLastPage = pageNumber === totalPages;

    const paginationBackButtons: PaginationButtonData[] = [
        {
            clickHandler: () => replaceQueryParameter([{
                key: QUERY_PARAM_KEYS.PAGE,
                value: 1,
            }]),
            label: <><StyledPreviousPageIcon $isButtonDisabled={isFirstPage} /> <span>First</span></>,
            disabledCondition: isFirstPage,
        },
        {
            clickHandler: () => replaceQueryParameter([{
                key: QUERY_PARAM_KEYS.PAGE,
                value: isFirstPage ? pageNumber : pageNumber! - 1
            }]),
            label: <><StyledPreviousPageIcon $isButtonDisabled={isFirstPage} /> <span>Previous</span></>,
            disabledCondition: isFirstPage,
        },
    ];

    const paginationForwordButtons: PaginationButtonData[] = [
        {
            clickHandler: () => replaceQueryParameter([{
                key: QUERY_PARAM_KEYS.PAGE,
                value: isLastPage ? pageNumber : pageNumber! + 1
            }]),
            label: <><span>Next</span> <StyledNextPageIcon $isButtonDisabled={isLastPage} /></>,
            disabledCondition: isLastPage,
        },
        {
            clickHandler: () => replaceQueryParameter([{
                key: QUERY_PARAM_KEYS.PAGE,
                value: totalPages!,
            }]),
            label: <><span>Last</span> <StyledNextPageIcon $isButtonDisabled={isLastPage} /></>,
            disabledCondition: isLastPage,
        },
    ];

    return { paginationBackButtons, paginationForwordButtons, totalPages };
};