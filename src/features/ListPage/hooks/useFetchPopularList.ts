import { useFetchApi } from "../../../common/hooks/useFetchApi";
import { useQueryParameter } from "../../../common/hooks/useQueryParameter";
import { MoviesListApi, PeopleListApi } from "../types/listApi.types";

export const useFetchPopularList = <PopularListApiResponse extends MoviesListApi | PeopleListApi>(url: string) => {
    const { search } = useQueryParameter();

    const {
        status: popularListStatus,
        data: popularList
    } = useFetchApi<PopularListApiResponse>({ queryKey: "popularList", url, fetchCondition: !search });

    return { popularList, popularListStatus };
};