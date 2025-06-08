import { useFetchPopularList } from "../../hooks/useFetchPopularList";
import { useFetchGenres } from "../../../../common/hooks/useFetchGenres";
import { ListPage } from "..";
import { MoviesListApi } from "../../types/listApi.types";
import { useQueryParameter } from "../../../../common/hooks/useQueryParameter";
import { useFetchResultsProps } from "../../hooks/useFetchResultsProps";
import { MovieItem } from "../../../../common/aliases/interfaces/movie.types";
import { ListPageProps } from "../../types/ListPageProps";

export const Movies = () => {
    const { search } = useQueryParameter();

    const resultsProps = useFetchResultsProps<MoviesListApi>({ searchType: "movie" });
    const { popularList, popularListStatus } = useFetchPopularList<MoviesListApi>("/popularMovies.json");
    const genresStatus = useFetchGenres();
 
    const selectListPageProps = (): ListPageProps<MovieItem[]> => (
        !search ?
            {
                title: "Popular movies",
                list: popularList?.results,
                fetchStatuses: [popularListStatus, genresStatus]
            } :
            resultsProps
    );

    const listPageProps = selectListPageProps();
    return (
        <>
            <ListPage
                {...listPageProps}
            />
        </>
    );
};