import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../reduxTypedHooks";
import { fetchGenres, selectGenresStatus } from "../../../genresSlice";
import { fetchPopularMovies, selectPopularMoviesList, selectPopularMoviesStatus } from "../../../popularMoviesSlice";
import { ListPage } from "..";

export const Movies = () => {
    const dispatch = useAppDispatch();

    const genresStatus = useAppSelector(selectGenresStatus);

    const popularMoviesStatus = useAppSelector(selectPopularMoviesStatus);
    const popularMovies = useAppSelector(selectPopularMoviesList);

    useEffect(() => {
        dispatch(fetchGenres());
        dispatch(fetchPopularMovies());
    }, [dispatch]);

    return (
        <>
            <ListPage
                title="Popular movies"
                list={popularMovies}
                fetchStatuses={[genresStatus, popularMoviesStatus]}
            />
        </>
    );
};