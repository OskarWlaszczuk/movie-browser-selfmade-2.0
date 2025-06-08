import { apiUrls } from "../../../common/constants/pictureConfigs";
import { useFetchApi } from "../../../common/hooks/useFetchApi";
import { useQueryParameter } from "../../../common/hooks/useQueryParameter";
import { ListApiUnion } from "../types/listApi.types";

export const useFetchResults = <ResultsList extends ListApiUnion>({ searchType }: { searchType: "movie" | "person" }) => {
    const { search, pageNumber } = useQueryParameter();

    const searchUrl = `${apiUrls.base}/search/${searchType}?query=${search}&include_adult=false&language=en-US&page=${pageNumber}`;

    const { status: resultsDataStatus, data: resultsData } = useFetchApi<ResultsList>({
        queryKey: "results",
        url: searchUrl,
        urlDependencies: [search, pageNumber],
        fetchCondition: !!search,
    });

    return { resultsDataStatus, resultsData };
};