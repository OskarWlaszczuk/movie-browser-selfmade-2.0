import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../reduxTypedHooks";
import { fetchGenres, selectGenresStatus } from "../../../genresSlice";
import { fetchPopularMovies, selectPopularMoviesList, selectPopularMoviesStatus } from "../../../popularMoviesSlice";
import { ListPage } from "..";
import { TilesList } from "./styled";
import { Tile } from "../../../common/components/Tile";
import { renderTilesList } from "../../../common/functions/renderTilesList";
import { Movie } from "../../../common/aliases/interfaces/Movie";
import { Person } from "../../../common/aliases/interfaces/Person";

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

    const renderMovieItem = ({
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
            movieDetails={{
                genresIds: genre_ids,
                rate: vote_average,
                votesTotal: vote_count,
            }}
        />
    );


    const renderPersonItem = ({
        id,
        profile_path,
        biography,
        birthday,
        name,
        place_of_birth,
    }: Person) => (
        <Tile
            key={id}
            id={id}
            picture={profile_path}
            title={name}
            personDetails={{
                biography,
                birthday,
                placeOfBirth: place_of_birth,
            }}
        />
    );

    return (
        <>
            <ListPage
                title="Popular movies"
                list={popularMovies}
                fetchStatuses={[genresStatus, popularMoviesStatus]}
            />
            {renderTilesList(
                popularMovies,
                renderMovieItem
            )}
        </>
    );
};