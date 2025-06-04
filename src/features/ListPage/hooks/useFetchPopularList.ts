import { PopularMovieApi, PopularPeopleApi } from "../../../common/aliases/interfaces/popularListApi.types";
import { useFetchApi } from "../../../common/hooks/useFetchApi";

export const useFetchPopularList = <PopularListApiResponse extends PopularMovieApi | PopularPeopleApi>(url: string) => {
    const {
        status: popularListStatus,
        data: popularList
    } = useFetchApi<PopularListApiResponse>({ queryKey: "popularList", url });

    return { popularList, popularListStatus };
};