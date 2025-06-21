import { QUERY_PARAM_KEYS } from "../../../../common/constants/QUERY_PARAM_KEYS";
import { useQueryParameter } from "../../../../common/hooks/useQueryParameter";
import { useReplaceQueryParameter } from "../../../../common/hooks/useReplaceQueryParameter";
import { PaginationButtonData } from "./types/PaginationButtonData";
import { PaginationButtonGroup } from "./components/PaginationButtonGroup";
import { PageIndicator, PageNumber } from "./styled";

export const Pagination = () => {
    const replaceQueryParameter = useReplaceQueryParameter();
    const { pageNumber } = useQueryParameter();

    const isFirstPage = pageNumber === 1;
    const isLastPage = pageNumber === 500;

    const paginationBackButtons: PaginationButtonData[] = [
        {
            clickHandler: () => replaceQueryParameter([{
                key: QUERY_PARAM_KEYS.PAGE,
                value: 1,
            }]),
            label: "First",
            disabledCondition: isFirstPage,
        },
        {
            clickHandler: () => replaceQueryParameter([{
                key: QUERY_PARAM_KEYS.PAGE,
                value: isFirstPage ? pageNumber : pageNumber! - 1
            }]),
            label: "Previous",
            disabledCondition: isFirstPage,
        },
    ];

    const paginationForwordButtons: PaginationButtonData[] = [
        {
            clickHandler: () => replaceQueryParameter([{
                key: QUERY_PARAM_KEYS.PAGE,
                value: isLastPage ? pageNumber : pageNumber! + 1
            }]),
            label: "Next",
            disabledCondition: isLastPage,
        },
        {
            clickHandler: () => replaceQueryParameter([{
                key: QUERY_PARAM_KEYS.PAGE,
                value: 500!,
            }]),
            label: "Last",
            disabledCondition: isLastPage,
        },
    ];

    return (
        <>
            <PaginationButtonGroup buttons={paginationBackButtons} />
            <PageIndicator>Page <PageNumber>{pageNumber} </PageNumber>of<PageNumber> {500}</PageNumber></PageIndicator>
            <PaginationButtonGroup buttons={paginationForwordButtons} />
        </>
    );
};