import { usePopularListsProps } from "../../hooks/usePopularListsProps";
import { useFetchGenres } from "../../../../common/hooks/useFetchGenres";
import { ListPage } from "..";
import { MoviesListApi } from "../../types/listApi.types";
import { useResultsProps } from "../../hooks/useResultsProps";
import { useSelectListPageProps } from "../../hooks/useSelectListPageProps";

export const Movies = () => {
    const resultsProps = useResultsProps<MoviesListApi>({ searchType: "movie" });
    const popularListProps = usePopularListsProps<MoviesListApi>("/popularMovies.json");
    const genresStatus = useFetchGenres();

    const selectedListPageProps = useSelectListPageProps({ resultsProps, popularListProps });
    const selectedListPagePropsWithGenresStatus = { ...selectedListPageProps, fetchStatuses: [...selectedListPageProps.fetchStatuses, genresStatus] };

    return (
        <>
            <ListPage
                {...selectedListPagePropsWithGenresStatus}
            />
        </>
    );
};