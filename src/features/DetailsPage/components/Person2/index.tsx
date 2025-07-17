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

export const Person2 = () => {
  const { role, id } = useParams();
  const { search } = useLocation();

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

  const searchParams = new URLSearchParams(search);
  const genreKey = "genre";
  const decadeKey = "decade";

  const filterByDecade = (movie) => {
    const decadeValue = searchParams.get(decadeKey);
    if (!searchParams.has(decadeKey)) return true;

    const decadeYear = Number(decadeValue?.replace("s", ""));
    const movieYear = getYear(movie.release_date) as number;

    return movieYear! >= decadeYear && movieYear <= decadeYear + 9;
  };

  const filterByGenres = (movie, genres: Genre[]) => {
    const filteredGenresNames = searchParams.getAll(genreKey);
    if (!searchParams.has(genreKey)) return true;

    const filteredGenresIDs = (
      genres
        ?.filter(({ name }) => filteredGenresNames.includes(formatForURL(name)))
        .map(({ id }) => id)
    );

    return movie.genre_ids.some(id => filteredGenresIDs?.includes(id));
  };

  const filterByRole = (movie) => formatForURL(movie.job) === role;

  const filters = [
    filterByDecade,
    filterByGenres,
    filterByRole,
  ];

  const combinedFetchStatus = useCombinedFetchStatus(
    [...profileStatuses, genresStatus],
    [...profilePausedFlags, isGenresPaused]
  );

  if (!details || !credits || !genres) return null
  const filtered = movies.filter(movie => filters.every(filter => filter(movie, genres)));

  return (
    <PageContainer>
      <KinematographySection>
        <StyledFiltersPanel>
          <RoleSwitcher
            credits={credits}
          />
          <GenreFilter
            genres={genres}
          />
          <DecadeFilter />
        </StyledFiltersPanel>
        <MoviesByGenreGrid
          movies={filtered}
          genres={genres}
        />
      </KinematographySection>
      <Biography person={details!} />
    </PageContainer>
  );
};