import { useLocation } from "react-router-dom";
import { useFetchApi } from "../../../common/hooks/useFetchApi";
import { useQueryParameter } from "../../../common/hooks/useQueryParameter";
import { ListApiUnion } from "../types/listApi.types";
import { ListPageProps } from "../types/ListPageProps";
import { routes } from "../../../common/functions/routes";

type PopularListProps<PopularListApiResponse extends ListApiUnion> = ListPageProps<PopularListApiResponse["results"]>;

export const usePopularListsProps = <PopularListApiResponse extends ListApiUnion>(url: string): PopularListProps<PopularListApiResponse> => {
    const { search } = useQueryParameter();
    const { pathname } = useLocation()

    const {
        status: popularListStatus,
        data: popularList
    } = useFetchApi<PopularListApiResponse>({ queryKey: "popularList", url, fetchCondition: !search });

    const popularListTitle = `Popular ${pathname === routes.movies() ? "movies" : "people"}`;
    const popularListProps: PopularListProps<PopularListApiResponse> = {
        title: popularListTitle,
        list: popularList?.results,
        fetchStatuses: [popularListStatus]
    };

    return popularListProps;
};