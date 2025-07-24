import { useLocation } from "react-router-dom";
import { Genre } from "../../../../../common/aliases/types/genre.types";
import { FiltersPanel } from "../../../../../common/components/FiltersPanel"
import { MoviesByGenreGrid } from "../MoviesByGenreGrid"
import { useFilterMovies } from "../useFilterMovies";
import { PersonParams } from "../../../../../common/aliases/interfaces/PersonParams";
import { StyledPersonMoviesBrowse } from "./styled";
import { useMoviesFiltersConfig } from "../../../../../common/hooks/useMoviesFiltersConfig";

interface PersonMoviesBrowseProps extends PersonParams {
    movies: any[];
    genres: Genre[];
}

export const PersonMoviesBrowse = ({ movies, genres, currentRole, personId }: PersonMoviesBrowseProps) => {
    const { search } = useLocation();
    const searchParams = new URLSearchParams(search);

    const filteredMovies = useFilterMovies({ movies, currentRole, genres, searchParams });
    const personFiltersConfig = useMoviesFiltersConfig({ movies, genres, currentRole, personId })

    return (
        <StyledPersonMoviesBrowse>
            <FiltersPanel
                filtersConfig={personFiltersConfig}
            />
            <MoviesByGenreGrid
                movies={filteredMovies}
                genres={genres}
            />
        </StyledPersonMoviesBrowse>
    );
};