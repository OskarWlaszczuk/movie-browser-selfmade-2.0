import { SearchQueryParams } from "../../../common/aliases/interfaces/SearchQueryParams";
import { EntityType } from "../../../common/aliases/types/EntityType";
import { getSearchEndpoint } from "../../../common/constants/apiEndpoints";
import { useFetchApi } from "../../../common/hooks/useFetchApi";
import { ListApiUnion } from "../types/listApi.types";
import { ListData } from "../types/ListData";

type ResultsProps = ListData<ListApiUnion["results"]>;

interface UseResultsListPropsInput {
    entityType: EntityType;
    queryParams: SearchQueryParams;
}

export const useResultsListProps = ({ entityType, queryParams }: UseResultsListPropsInput): ResultsProps => {
    const { search, pageNumber } = queryParams;

    const { status: resultsDataStatus, data: resultsData } = useFetchApi<ListApiUnion>({
        queryKey: "results",
        endpoint: getSearchEndpoint({ entityType, ...queryParams }),
        urlDependencies: [search, pageNumber],
        fetchCondition: !!search,
        fetchDelayInSec: 1,
    });

    const resultsListProps: ResultsProps = {
        title: `Search for "${search}" (${resultsData?.total_results})`,
        listData: resultsData,
        fetchStatuses: [resultsDataStatus]
    };

    return resultsListProps;
};