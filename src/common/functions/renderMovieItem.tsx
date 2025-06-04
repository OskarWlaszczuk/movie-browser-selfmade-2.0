import { MovieItem } from "../aliases/interfaces/movie.types";
import { Tile } from "../components/Tile";
import { getYear } from "./getYear";

export const renderMovieItem = ({
    genre_ids,
    id,
    vote_average,
    vote_count,
    title,
    release_date,
    poster_path
}: MovieItem) => (
    <Tile
        key={id}
        id={id}
        picture={poster_path}
        title={title}
        subTitle={getYear(release_date)}
        movieDetails={{
            genresIds: genre_ids,
            voteAverage: vote_average,
            voteCount: vote_count,
        }}
    />
);