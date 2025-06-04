import { ListPage } from "../index";
import { PopularMovieApi } from "../../../common/aliases/interfaces/TMDBRList";
import { useFetchPopularList } from "../../../common/hooks/useFetchPopularList";
import { useFetchGenres } from "../../../common/hooks/useFetchGenres";

export const Movies = () => {
    const { popularList, popularListStatus } = useFetchPopularList<PopularMovieApi>("/popularMovies.json");
    const genresStatus = useFetchGenres();

    return (
        <ListPage
            title="Popular movies"
            list={popularList?.results}
            fetchStatuses={[popularListStatus, genresStatus]}
        />
    );
};