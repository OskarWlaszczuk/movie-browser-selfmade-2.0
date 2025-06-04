import { useFetchPopularList } from "../../hooks/useFetchPopularList";
import { useFetchGenres } from "../../../../common/hooks/useFetchGenres";
import { ListPage } from "..";
import { PopularMovieApi } from "../../types/popularListApi.types";

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