import { useFetchPopularList } from "../../hooks/useFetchPopularList";
import { useFetchGenres } from "../../../../common/hooks/useFetchGenres";
import { ListPage } from "..";
import { MoviesListApi } from "../../types/listApi.types";
import { useFetchResultsProps } from "../../hooks/useFetchResultsProps";
import { useSelectListPageProps } from "../../hooks/useSelectListPageProps";

export const Movies = () => {
    const resultsProps = useFetchResultsProps<MoviesListApi>({ searchType: "movie" });
    const popularListProps = useFetchPopularList<MoviesListApi>("/popularMovies.json");
    const genresStatus = useFetchGenres();

    const selectedListPageProps = useSelectListPageProps({ resultsProps, popularListProps });

    return (
        <>
            <ListPage
                {...selectedListPageProps}
            />
        </>
    );
};