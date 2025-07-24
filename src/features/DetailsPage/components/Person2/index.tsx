import { useParams } from "react-router-dom";
import { useFetchEntityProfile } from "../../hooks/useFetchEntityProfile";
import { DetailedPersonItem } from "../../../../common/aliases/interfaces/person.types";
import { PersonCredits } from "../../types/credits.types";
import { useFetchGenres } from "../../../../common/hooks/useFetchGenres";
import { useCombinedFetchStatus } from "../../../../common/hooks/useCombinedFetchStatus";
import { StyledPerson } from "./styled";
import { PersonBiography } from "./PersonBiography";
import { PersonMoviesBrowse } from "./PersonMoviesBrowse";
import { mediaSingularTypes } from "../../../../common/constants/entityTypes";

export const Person2 = () => {
  const { id, role } = useParams();

  const { genres, genresStatus, isGenresPaused } = useFetchGenres();
  const {
    details,
    credits,
    profileStatuses,
    profilePausedFlags
  } = useFetchEntityProfile<DetailedPersonItem, PersonCredits>(mediaSingularTypes.PERSON, id!);

  const crewMovies = credits?.crew;
  const castMovies = credits?.cast.map(movie => ({ ...movie, job: "Actor" }));
  const movies = [...crewMovies || [], ...castMovies || []];

  const combinedFetchStatus = useCombinedFetchStatus(
    [...profileStatuses, genresStatus],
    [...profilePausedFlags, isGenresPaused]
  );

  if (!details || !credits || !genres) return null;

  return (
    <StyledPerson>
      <PersonMoviesBrowse
        movies={movies}
        genres={genres}
        currentRole={role!}
        personId={id!}
      />
      <PersonBiography person={details} />
    </StyledPerson>
  );
};