import { ListPage } from "../index";
import { useFetchApi } from "../../../common/hooks/useFetchApi";
import { PopularMovieApi } from "../../../common/aliases/interfaces/TMDBRList";

export const Movies = () => {

    const {
        status: popularMoviesStatus,
        data: popularMovies
    } = useFetchApi<PopularMovieApi>({ queryKey: "popularMovies", url: "/popularMovies.json" });

    return (
        <ListPage
            title="Popular movies"
            list={popularMovies?.results}
            fetchStatuses={[popularMoviesStatus]}
        />
    );
};