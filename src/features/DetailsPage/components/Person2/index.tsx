import { useLocation, useParams } from "react-router-dom";
import { useFetchEntityProfile } from "../../hooks/useFetchEntityProfile";
import { DetailedPersonItem } from "../../../../common/aliases/interfaces/person.types";
import { PersonCredits } from "../../types/credits.types";
import { useFetchGenres } from "../../../../common/hooks/useFetchGenres";
import { RoleSwitcher } from "./RoleSwitcher";
import { GenreFilter } from "./GenreFilter";
import { useCombinedFetchStatus } from "../../../../common/hooks/useCombinedFetchStatus";
import { StyledFiltersPanel } from "./FiltersPanel/styled";
import { PageContainer, KinematographySection } from "./styled";
import { Biography } from "./Biography";
import { DecadeFilter } from "./DecadeFilter";
import { MoviesByGenreGrid } from "./MoviesByGenreGrid";
import { useFilterMovies } from "./useFilterMovies";

export const Person2 = () => {
  const { role, id } = useParams();
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);

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

  const filteredMovies = useFilterMovies({ movies, URLRole: role!, genres, searchParams });

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
            personURLParams={{ id: id!, role: role! }}
            searchParams={searchParams}
            movies={movies}
          />
          <GenreFilter
            genres={genres}
            searchParams={searchParams}
          />
          <DecadeFilter searchParams={searchParams}/>
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