import { useLocation } from "react-router-dom";
import { useFetchApi } from "../../../common/hooks/useFetchApi";
import { useQueryParameter } from "../../../common/hooks/useQueryParameter";
import { ListApiUnion } from "../types/listApi.types";
import { ListPageProps } from "../types/ListPageProps";
import { routes } from "../../../common/functions/routes";
import { popularListsEndpoints } from "../../../common/constants/apiEndpoints";

type PopularListProps<PopularListApiResponse extends ListApiUnion> = ListPageProps<PopularListApiResponse["results"]>;
type PopularListsEndpoint = typeof popularListsEndpoints[keyof typeof popularListsEndpoints];

export const usePopularListsProps = <PopularListApiResponse extends ListApiUnion>(popularListEndpoint: PopularListsEndpoint): PopularListProps<PopularListApiResponse> => {
    const { search } = useQueryParameter();
    const { pathname } = useLocation()

    const {
        status: popularListStatus,
        data: popularList
    } = useFetchApi<PopularListApiResponse>({ queryKey: "popularList", endpoint: popularListEndpoint, fetchCondition: !search });

    const popularListTitle = `Popular ${pathname === routes.movies() ? "movies" : "people"}`;
    const popularListProps: PopularListProps<PopularListApiResponse> = {
        title: popularListTitle,
        listData: popularList,
        fetchStatuses: [popularListStatus]
    };

    return popularListProps;
};