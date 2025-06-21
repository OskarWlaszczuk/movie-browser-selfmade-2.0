import { useLocation } from "react-router-dom";
import { useFetchApi } from "../../../common/hooks/useFetchApi";
import { ListApiUnion } from "../types/listApi.types";
import { ListData } from "../types/ListData";
import { routes } from "../../../common/functions/routes";
import { popularListsEndpoints } from "../../../common/constants/apiEndpoints";

type PopularListProps = ListData<ListApiUnion["results"]>;
type PopularListsEndpoint = typeof popularListsEndpoints[keyof typeof popularListsEndpoints];

interface UsePopularListsPropsInput {
    popularListEndpoint: PopularListsEndpoint;
    queryParams: {
        search: string;
        pageNumber: number;
    };
}

export const usePopularListsProps = ({ popularListEndpoint, queryParams }: UsePopularListsPropsInput): PopularListProps => {
    const { pathname } = useLocation()

    const {
        status: popularListStatus,
        data: popularList
    } = useFetchApi<ListApiUnion>({
        queryKey: "popularList",
        endpoint: popularListEndpoint,
        fetchCondition: !queryParams.search
    });

    const popularListTitle = `Popular ${pathname === routes.movies() ? "movies" : "people"}`;
    const popularListProps: PopularListProps = {
        title: popularListTitle,
        listData: popularList,
        fetchStatuses: [popularListStatus]
    };

    return popularListProps;
};