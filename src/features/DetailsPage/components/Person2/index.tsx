import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useFetchEntityProfile } from "../../hooks/useFetchEntityProfile";
import { DetailedPersonItem } from "../../../../common/aliases/interfaces/person.types";
import { PersonCredits } from "../../types/credits.types";
import { useFetchGenres } from "../../../../common/hooks/useFetchGenres";
import { Filter } from "./Filter";
import { useCombinedFetchStatus } from "../../../../common/hooks/useCombinedFetchStatus";
import { PageContainer, KinematographySection } from "./styled";
import { Biography } from "./Biography";
import { MoviesByGenreGrid } from "./MoviesByGenreGrid";
import { useFilterMovies } from "./useFilterMovies";
import { formatForURL } from "../../../../common/functions/formatForURL";
import { FilterOption } from "../../../../common/aliases/interfaces/SelectOption";
import { StyledFiltersPanel } from "../../../../common/components/FiltersPanel/styled";
import { capitalizeFirstLetter } from "../../../../common/functions/capitalizeFirstLetter";
import { FilterProps } from "../../../../common/aliases/interfaces/FilterProps";
import { FiltersPanel } from "../../../../common/components/FiltersPanel";

export const Person2 = () => {
  const { role, id } = useParams();
  const { search, pathname } = useLocation();
  const navigate = useNavigate();

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

  const roles = [...new Set(movies?.map(({ job }) => job))];
  const roleOptions: FilterOption[] = roles.map(role => ({ value: formatForURL(role), label: role }));

  const handleRoleChange = (selectedRole: FilterOption["value"]) => {
    navigate(`/${selectedRole}/${id}?${searchParams.toString()}`);
  };
  const decades = [
    "2020s", "2010s", "2000s", "1990s", "1980s", "1970s",
    "1960s", "1950s", "1940s", "1930s", "1920s", "1910s",
    "1900s", "1890s", "1880s", "1870s"
  ];

  const decadeParamKey = "decade";
  const noDecadeValue = "ANY DECADE";
  const decadeParam = searchParams.get(decadeParamKey);

  const decadeOptions: FilterOption[] = [
    { label: noDecadeValue, value: noDecadeValue },
    ...decades.map(decade => ({ value: decade, label: decade }))
  ];

  const handleDecadeChange = (selectedDecade: FilterOption["value"]) => {
    selectedDecade === noDecadeValue ?
      searchParams.delete(decadeParamKey) :
      searchParams.set(decadeParamKey, selectedDecade)

    navigate(`${pathname}?${searchParams.toString()}`);
  };

  const genreKey = "genre";
  const noGenreValue = "ANY GENRE";
  const anyGenreOption = { label: noGenreValue, value: noGenreValue };

  const genresParam = searchParams.get(genreKey);
  const genresNames = genres?.map(({ name }) => name);
  const genreOptions: FilterOption[] = [
    anyGenreOption,
    ...genresNames?.map(genre => ({ value: formatForURL(genre), label: capitalizeFirstLetter(genre) })) || []
  ];

  const handleGenreChange = (selectedGenre: FilterOption["value"]) => {
    selectedGenre === noGenreValue ?
      searchParams.delete(genreKey) :
      searchParams.set(genreKey, selectedGenre)

    navigate(`${pathname}?${searchParams.toString()}`);
  };

  if (!details || !credits || !genres) return null


  const personFiltersConfig: FilterProps[] = [
    {
      options: roleOptions,
      filterParam: role!,
      optionChangeHandler: handleRoleChange,
    },
    {
      options: decadeOptions,
      filterParam: decadeParam || noDecadeValue,
      optionChangeHandler: handleDecadeChange,
    },
    {
      options: genreOptions,
      filterParam: genresParam || noGenreValue,
      optionChangeHandler: handleGenreChange,
    },
  ];

  return (
    <PageContainer>
      <KinematographySection>
        <FiltersPanel
          filtersConfig={personFiltersConfig}
        />
        <MoviesByGenreGrid
          movies={filteredMovies}
          genres={genres}
        />
      </KinematographySection>
      <Biography person={details!} />
    </PageContainer>
  );
};