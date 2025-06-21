import { useFetchApi } from "../../../common/hooks/useFetchApi";
import { ListApiUnion } from "../types/listApi.types";
import { ListData } from "../types/ListData";

type ResultsProps = ListData<ListApiUnion["results"]>;

interface UseResultsListPropsInput {
    searchEntity: "movie" | "person";
    queryParams: {
        search: string;
        pageNumber: number;
    };
}

export const useResultsListProps = ({ searchEntity, queryParams }: UseResultsListPropsInput): ResultsProps => {
    const { search, pageNumber } = queryParams;

    const searchUrl = `search/${searchEntity}?query=${search}&include_adult=false&language=en-US&page=${pageNumber}`;

    const { status: resultsDataStatus, data: resultsData } = useFetchApi<ListApiUnion>({
        queryKey: "results",
        endpoint: searchUrl,
        urlDependencies: [search, pageNumber],
        fetchCondition: !!search,
    });

    const resultsListProps: ResultsProps = {
        title: `Search for "${search}" (${resultsData?.total_results})`,
        listData: resultsData,
        fetchStatuses: [resultsDataStatus]
    };

    return resultsListProps;
};