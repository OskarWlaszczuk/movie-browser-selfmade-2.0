import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../reduxTypedHooks";
import { fetchGenres, selectGenresStatus } from "../../../genresSlice";
import { fetchPopularMovies, selectPopularMoviesList, selectPopularMoviesStatus } from "../../../popularMoviesSlice";
import { ListPage } from "..";
import { TilesList } from "./styled";
import { Tile } from "../../../common/components/Tile";
import { renderTilesList } from "../../../common/functions/renderTilesList";
import { Movie } from "../../../common/aliases/interfaces/Movie";

export const Movies = () => {
    const dispatch = useAppDispatch();

    const genresStatus = useAppSelector(selectGenresStatus);

    const popularMoviesStatus = useAppSelector(selectPopularMoviesStatus);
    const popularMovies = useAppSelector(selectPopularMoviesList);

    useEffect(() => {
        dispatch(fetchGenres());
        dispatch(fetchPopularMovies());
    }, [dispatch]);
    console.log(popularMovies)

    const renderListItem = ({
        genre_ids,
        id,
        vote_average,
        vote_count,
        title,
        release_date,
        poster_path
    }: Movie) => (
        <Tile
            key={id}
            id={id}
            picture={poster_path}
            title={title}
            subTitle={release_date}
        />
    );


    return (
        <>
            <ListPage
                title="Popular movies"
                list={popularMovies}
                fetchStatuses={[genresStatus, popularMoviesStatus]}
            />
            <TilesList>
                {renderTilesList(
                    popularMovies,
                    renderListItem
                )}
            </TilesList>
        </>
    );
};