import { useParams } from "react-router-dom";
import { useFetchEntityProfile } from "../../hooks/useFetchEntityProfile";
import { DetailedPersonItem } from "../../../../common/aliases/interfaces/person.types";
import { PersonCredits } from "../../types/credits.types";
import { useFetchGenres } from "../../../../common/hooks/useFetchGenres";
import { useCombinedFetchStatus } from "../../../../common/hooks/useCombinedFetchStatus";
import { StyledPerson } from "./styled";
import { PersonBiography } from "./PersonBiography";
import { mediaSingularTypes } from "../../../../common/constants/entityTypes";
import { BrowseExpandedSection } from "../../../browse/components/BrowseExpandedSection";
import { MovieItem } from "../../../../common/aliases/interfaces/movie.types";
import { ExtractTileProps } from "../../../../common/aliases/types/ExtractTileProps";
import { useRoleFilterConfig } from "../../../../common/hooks/useRoleFilterConfig";
import { useDecadeFilterConfig } from "../../../../common/hooks/useDecadeFilterConfig";
import { useGenreFilterConfig } from "../../../../common/hooks/useGenreFilterConfig";

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

  const roleFilterConfig = useRoleFilterConfig({ movies, personId: id!, roleParam: role! });
  const decadeFilterConfig = useDecadeFilterConfig();
  const genreFilterConfig = useGenreFilterConfig({ genres });

  const moviesFiltersConfig = [roleFilterConfig, decadeFilterConfig, genreFilterConfig];

  const extractMovie: ExtractTileProps<MovieItem> = (movie) => ({
    imagePath: movie.poster_path,
    name: movie.title,
    detailsRoute: `movie/${movie.id}`,
  });

  if (!details || !credits || !genres) return null;

  return (
    <StyledPerson>
      <BrowseExpandedSection<MovieItem>
        mediaList={movies}
        extractTileProps={extractMovie}
        filtersConfig={moviesFiltersConfig}
      />
      <PersonBiography person={details} />
    </StyledPerson>
  );
};