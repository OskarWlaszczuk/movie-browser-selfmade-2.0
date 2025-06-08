import { OrUndefined } from "../../../../common/aliases/types/OrUndefined";
import { QUERY_PARAM_KEYS } from "../../../../common/constants/QUERY_PARAM_KEYS";
import { useQueryParameter } from "../../../../common/hooks/useQueryParameter";
import { useReplaceQueryParameter } from "../../../../common/hooks/useReplaceQueryParameter";
import { ListApiUnion } from "../../types/listApi.types"
import { PaginationButtonData } from "./types/PaginationButtonData";
import { PaginationButtonGroup } from "./components/PaginationButtonGroup";
import { PageIndicator, PageNumber } from "./styled";

interface PaginationProps {
    totaPages: OrUndefined<ListApiUnion["total_pages"]>;
}

export const Pagination = ({ totaPages }: PaginationProps) => {
    const replaceQueryParameter = useReplaceQueryParameter();
    const { pageNumber } = useQueryParameter();

    const isFirstPage = pageNumber === 1;
    const isLastPage = pageNumber === totaPages;

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
                value: totaPages!,
            }]),
            label: "Last",
            disabledCondition: isLastPage,
        },
    ];


    return (
        <>
            <PaginationButtonGroup buttons={paginationBackButtons} />
            <PageIndicator>Page <PageNumber>{pageNumber} </PageNumber>of<PageNumber> {totaPages}</PageNumber></PageIndicator>
            <PaginationButtonGroup buttons={paginationForwordButtons} />
        </>
    );
};