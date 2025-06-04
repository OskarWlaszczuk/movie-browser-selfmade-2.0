import { PopularMovieApi, PopularPeopleApi } from "../aliases/interfaces/TMDBRList";
import { useFetchApi } from "./useFetchApi";

export const useFetchPopularList = <PopularListApiResponse extends PopularMovieApi | PopularPeopleApi>(url: string) => {
    const {
        status: popularListStatus,
        data: popularList
    } = useFetchApi<PopularListApiResponse>({ queryKey: "popularList", url });

    return { popularList, popularListStatus };
};