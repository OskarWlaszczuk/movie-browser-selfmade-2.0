import { Genre } from "../../../../common/aliases/types/genre.types";
import { OrUndefined } from "../../../../common/aliases/types/OrUndefined";
import { personSearchParamsKeys } from "../../../../common/constants/personSearchParams";
import { formatForURL } from "../../../../common/functions/formatForURL";
import { getYear } from "../../../../common/functions/getYear";

interface FilterProps {
    movie: any;
    searchParams: URLSearchParams;
    genres: OrUndefined<Genre[]>;
    URLRole: string
}

const isMatchingDecadeRange = ({ movie, searchParams }: FilterProps) => {
    const decadeValue = searchParams.get(decadeKey);
    if (!searchParams.has(personSearchParamsKeys.decade)) return true;

    const decadeYear = Number(decadeValue?.replace("s", ""));
    const movieYear = getYear(movie.release_date) as number;

    return movieYear! >= decadeYear && movieYear <= decadeYear + 9;
};

const isMachingGenres = ({ movie, genres, searchParams }: FilterProps) => {
    const filteredGenresNames = searchParams.getAll(personSearchParamsKeys.genre);
    if (!searchParams?.has(personSearchParamsKeys.genre)) return true;

    const filteredGenresIDs = (
        genres
            ?.filter(({ name }) => filteredGenresNames.includes(formatForURL(name)))
            .map(({ id }) => id)
    );

    return movie.genre_ids.some(id => filteredGenresIDs?.includes(id));
};

const isMatchingRole = ({ movie, URLRole }: FilterProps) => (
    formatForURL(movie.job) === URLRole
);

interface UseFilteredMovieProps {
    genres: OrUndefined<Genre[]>;
    URLRole: string;
    movies: any[]
    searchParams: URLSearchParams;
}

export const useFilterMovies = ({ genres, URLRole, movies, searchParams }: UseFilteredMovieProps) => {

    const movieFilters = {
        isMatchingDecadeRange,
        isMachingGenres,
        isMatchingRole,
    };

    const filteredMovies = (
        movies.filter(movie => (
            Object
                .values(movieFilters)
                .every(filter => filter({ movie, searchParams, URLRole, genres }))
        ))
    );

    return filteredMovies;
};