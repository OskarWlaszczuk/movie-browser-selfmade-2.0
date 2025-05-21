import { Movie } from "../aliases/interfaces/Movie";
import { Tile } from "../components/Tile";

export const renderMovieItem = ({
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
            voteAverage: vote_average,
            voteCount: vote_count,
        }}
    />
);