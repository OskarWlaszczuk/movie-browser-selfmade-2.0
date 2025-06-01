import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../reduxTypedHooks";
import { popularMoviesActions, popularMoviesSelectors } from "../../../popularMoviesSlice";
import { ListPage } from "../index";
import { GenreResponse } from "../../../common/aliases/types/genre.types";
import { useFetchApi } from "../../../common/hooks/useFetchApi";

export const Movies = () => {

    const dispatch = useAppDispatch();

    const popularMoviesStatus = useAppSelector(popularMoviesSelectors.selectPopularListStatus);
    const popularMovies = useAppSelector(popularMoviesSelectors.selectPopularList);


    
    useEffect(() => {
        dispatch(popularMoviesActions.fetchPopularList());
    }, [dispatch]);

    return (
        <ListPage
            title="Popular movies"
            // @ts-ignore
            list={popularMovies}
            // @ts-ignore
            fetchStatuses={[popularMoviesStatus]}
        />
    );
};