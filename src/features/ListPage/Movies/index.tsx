import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../reduxTypedHooks";
import { fetchGenres, selectGenresStatus } from "../../../genresSlice";
import { popularMoviesActions, popularMoviesSelectors } from "../../../popularMoviesSlice";
import { ListPage } from "../index";

export const Movies = () => {
    const dispatch = useAppDispatch();

    const genresStatus = useAppSelector(selectGenresStatus);

    const popularMoviesStatus = useAppSelector(popularMoviesSelectors.selectPopularListStatus);
    const popularMovies = useAppSelector(popularMoviesSelectors.selectPopularList);

    useEffect(() => {
        dispatch(fetchGenres());
        dispatch(popularMoviesActions.fetchPopularList());
    }, [dispatch]);

    return (
        <ListPage
            title="Popular movies"
            // @ts-ignore
            list={popularMovies}
            fetchStatuses={[genresStatus, popularMoviesStatus]}
        />
    );
};