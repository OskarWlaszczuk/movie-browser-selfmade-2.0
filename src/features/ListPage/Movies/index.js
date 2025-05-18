import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../reduxTypedHooks";
import { fetchGenres, selectGenresStatus } from "../../../genresSlice";
import { GenresList } from "../../../common/components/GenresList";
import axios from "axios";
import { Tile } from "../../../common/components/Tile";
import { TilesList } from "./styled";

export const Movies = () => {
    const dispatch = useAppDispatch();
    const genresStatus = useAppSelector(selectGenresStatus);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchExample = async () => {
            try {
                const response = await axios.get('/popularMovies.json');
                setData(response.data);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchExample();
    }, []);

    console.log(data)
    useEffect(() => {
        dispatch(fetchGenres())
    }, [dispatch]);

    return (
        <>
            Movies
            <TilesList>
                {
                    data?.map(({
                        genre_ids,
                        id,
                        vote_average,
                        vote_count,
                        title,
                        release_date,
                        poster_path
                    }, index) => (
                        <Tile
                            key={index}
                            id={id}
                            picture={"poster_path"}
                            title={title}
                            subTitle={release_date}
                            movieDetails={{
                                genresIds: genre_ids,
                                rate: vote_average,
                                votesTotal: vote_count,
                            }}
                        />
                    ))
                }
            </TilesList>
        </>
    );
};