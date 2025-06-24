import { useLocation } from "react-router-dom";
import { useFetchApi } from "../../../common/hooks/useFetchApi";
import { ListApiUnion } from "../types/listApi.types";
import { ListData } from "../types/ListData";
import { routes } from "../../../common/functions/routes";
import { SearchQueryParams } from "../../../common/aliases/interfaces/SearchQueryParams";

type PopularListProps = ListData<ListApiUnion["results"]>;

interface UsePopularListsPropsInput {
    popularListEndpoint: string;
    queryParams: SearchQueryParams;
    queryKeyParam: "movies" | "people"
}

export const usePopularListsProps = ({ popularListEndpoint, queryParams, queryKeyParam }: UsePopularListsPropsInput): PopularListProps => {
    const { pathname } = useLocation()

    const {
        status: popularListStatus,
        data: popularList,
        isPaused: isPopularListPaused,
    } = useFetchApi<ListApiUnion>({
        queryKey: `Popular ${queryKeyParam}`,
        endpoint: popularListEndpoint,
        fetchCondition: !queryParams.search,
        urlDependencies: [queryParams.pageNumber, queryParams.search]
    });

    const popularListTitle = `Popular ${pathname === routes.movies() ? "movies" : "people"}`;
    const popularListProps: PopularListProps = {
        title: popularListTitle,
        listData: popularList,
        fetchStatuses: [popularListStatus],
        pausedFlags: [isPopularListPaused],
    };

    return popularListProps;
};