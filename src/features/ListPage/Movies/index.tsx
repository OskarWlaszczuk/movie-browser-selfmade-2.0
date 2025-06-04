import { ListPage } from "../index";
import { PopularMovieApi } from "../../../common/aliases/interfaces/TMDBRList";
import { useFetchPopularList } from "../../../common/hooks/useFetchPopularList";

export const Movies = () => {
    const { popularList, popularListStatus } = useFetchPopularList<PopularMovieApi>("/popularMovies.json");

    return (
        <ListPage
            title="Popular movies"
            list={popularList?.results}
            fetchStatuses={[popularListStatus]}
        />
    );
};