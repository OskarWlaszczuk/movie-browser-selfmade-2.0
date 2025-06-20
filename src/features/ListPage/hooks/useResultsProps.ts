import { useFetchApi } from "../../../common/hooks/useFetchApi";
import { useQueryParameter } from "../../../common/hooks/useQueryParameter";
import { ListApiUnion } from "../types/listApi.types";
import { ListPageProps } from "../types/ListPageProps";

type ResultsProps<ResultsList extends ListApiUnion> = ListPageProps<ResultsList["results"]>;

export const useResultsProps = <ResultsList extends ListApiUnion>({ searchType }: { searchType: "movie" | "person" }): ResultsProps<ResultsList> => {
    const { search, pageNumber } = useQueryParameter();

    const searchUrl = `search/${searchType}?query=${search}&include_adult=false&language=en-US&page=${pageNumber}`;

    const { status: resultsDataStatus, data: resultsData } = useFetchApi<ResultsList>({
        queryKey: "results",
        endpoint: searchUrl,
        urlDependencies: [search, pageNumber],
        fetchCondition: !!search,
    });


    const resultsProps: ResultsProps<ResultsList> = {
        title: `Search for "${search}" (${resultsData?.total_results})`,
        listData: resultsData,
        fetchStatuses: [resultsDataStatus]
    };

    return resultsProps;
};