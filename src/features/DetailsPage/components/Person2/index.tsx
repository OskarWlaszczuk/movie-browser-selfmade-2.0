import { useLocation, useParams } from "react-router-dom";
import { useFetchEntityProfile } from "../../hooks/useFetchEntityProfile";
import { DetailedPersonItem } from "../../../../common/aliases/interfaces/person.types";
import { PersonCredits } from "../../types/credits.types";
import { useFetchGenres } from "../../../../common/hooks/useFetchGenres";
import { RoleSwitcher } from "./RoleSwitcher";
import { GenreFilter } from "./GenreFilter";
import { formatForURL } from "../../../../common/functions/formatForURL";
import { useCombinedFetchStatus } from "../../../../common/hooks/useCombinedFetchStatus";
import { StyledFiltersPanel } from "./FiltersPanel/styled";
import { PageContainer, KinematographySection } from "./styled";
import { Biography } from "./Biography";
import { getYear } from "../../../../common/functions/getYear";
import { DecadeFilter } from "./DecadeFilter";
import { MoviesByGenreGrid } from "./MoviesByGenreGrid";
import { Genre } from "../../../../common/aliases/types/genre.types";
import { OrUndefined } from "../../../../common/aliases/types/OrUndefined";
interface FilterProps {
  movie: any;
  searchParams?: URLSearchParams;
  genres?: OrUndefined<Genre[]>;
  URLRole?: string
}
const genreKey = "genre";
const decadeKey = "decade";

const isMatchingDecadeRange = ({ movie, searchParams }: FilterProps) => {
  const decadeValue = searchParams.get(decadeKey);
  if (!searchParams.has(decadeKey)) return true;

  const decadeYear = Number(decadeValue?.replace("s", ""));
  const movieYear = getYear(movie.release_date) as number;

  return movieYear! >= decadeYear && movieYear <= decadeYear + 9;
};

const isMachingGenres = ({ movie, genres, searchParams }: FilterProps) => {
  const filteredGenresNames = searchParams.getAll(genreKey);
  if (!searchParams?.has(genreKey)) return true;

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
}

const useFilterMovies = ({ genres, URLRole, movies }: UseFilteredMovieProps) => {
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);

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

export const Person2 = () => {
  const { role, id } = useParams();

  const { genres, genresStatus, isGenresPaused } = useFetchGenres();
  const {
    details,
    credits,
    profileStatuses,
    profilePausedFlags
  } = useFetchEntityProfile<DetailedPersonItem, PersonCredits>("person", id!);

  const crewMovies = credits?.crew;
  const castMovies = credits?.cast.map(movie => ({ ...movie, job: "Actor" }));
  const movies = [...crewMovies || [], ...castMovies || []];


  const filteredMovies = useFilterMovies({ movies, URLRole: role!, genres });

  const combinedFetchStatus = useCombinedFetchStatus(
    [...profileStatuses, genresStatus],
    [...profilePausedFlags, isGenresPaused]
  );
  
  if (!details || !credits || !genres) return null

  return (
    <PageContainer>
      <KinematographySection>
        <StyledFiltersPanel>
          <RoleSwitcher
            movies={movies}
          />
          <GenreFilter
            genres={genres}
          />
          <DecadeFilter />
        </StyledFiltersPanel>
        <MoviesByGenreGrid
          movies={filteredMovies}
          genres={genres}
        />
      </KinematographySection>
      <Biography person={details!} />
    </PageContainer>
  );
};