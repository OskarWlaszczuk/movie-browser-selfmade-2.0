import { NavLink, useLocation, useParams } from "react-router-dom";
import { useFetchEntityProfile } from "../../hooks/useFetchEntityProfile";
import { DetailedPersonItem } from "../../../../common/aliases/interfaces/person.types";
import { PersonCredits } from "../../types/credits.types";
import { TilesListSection, TilesListSection2 } from "../../../../common/components/TilesListSection";
import { useFetchGenres } from "../../../../common/hooks/useFetchGenres";
import { PersonCrewMovieItem } from "../../../../common/aliases/interfaces/movie.types";
import { OrUndefined } from "../../../../common/aliases/types/OrUndefined";
import { actorRole } from "../../../../common/constants/actorRole";
import { RoleSwitcher } from "./RoleSwitcher";
import { GenreFilter } from "./GenreFilter";
import { formatForURL } from "../../../../common/functions/formatForURL";
import { Main } from "../../../../common/components/Main";
import { useCombinedFetchStatus } from "../../../../common/hooks/useCombinedFetchStatus";
import { FiltersPanel } from "./FiltersPanel";
import { StyledFiltersPanel } from "./FiltersPanel/styled";
import styled from "styled-components";
import { PageContainer, KinematographySection } from "./styled";
import { Picture } from "../../../../common/components/Picture";
import { apiUrls, pictureWidths } from "../../../../common/constants/pictureConfigs";
import { Biography } from "./Biography";
import { MoviesGrid } from "./MoviesGrid";
import { getYear } from "../../../../common/functions/getYear";
import { DecadeFilter } from "./DecadeFilter";

export const filterMoviesByRole = (
  crew: OrUndefined<PersonCrewMovieItem[]>,
  role: string
) => crew?.filter(
  ({ job }) => job.toLowerCase().replace(" ", "-") === role
);

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
  const searchParams = new URLSearchParams(search)
  const genreKey = "genre";
  const filteredGenresNames = searchParams.getAll(genreKey);

  const decadeFilter = Number(searchParams.get("decade")?.replace("s", ""));
  const decadeYearRange = { start: decadeFilter, end: decadeFilter + 9 };

  const filteredGenresIDs = (
    genres
      ?.filter(({ name }) => filteredGenresNames.includes(formatForURL(name)))
      .map(({ id }) => id)
  );

  const listToDisplay = (
    role === actorRole ?
      credits?.cast :
      filterMoviesByRole(credits?.crew, role!)
  );
  const moviesWithDate = listToDisplay?.filter(({ release_date }) => release_date);
  const moviesGroupedByDecade = (
    moviesWithDate
      ?.filter(({ release_date }) => {
        const movieYear = getYear(release_date) as number;
        return movieYear >= decadeYearRange.start! && movieYear <= decadeYearRange.end
      })
  );
  console.log(listToDisplay)

  const moviesGroupedByGenres = (
    filteredGenresIDs
      ?.map(filteredID => ({
        genreList: [...moviesGroupedByDecade?.filter(({ genre_ids }) => genre_ids.includes(filteredID)) || []],
        genreName: genres?.find(({ id }) => id === filteredID)?.name
      }))
  );

  // const moviesByGenre = (
  //   genres
  //     ?.map(({ id }) => id)
  //     ?.map(genreID => {
  //       const genreMovies = [...listToDisplay?.filter(({ genre_ids }) => genre_ids.includes(genreID)) || []];

  //       return {
  //         genreMovies,
  //         genreName: genres?.find(({ id }) => id === genreID)?.name,
  //         movieCount: genreMovies.length
  //       }
  //     })
  // );
  // console.log(moviesByGenre)

  const view = (
    filteredGenresNames.length > 0 ?
      moviesGroupedByGenres?.map(({ genreList, genreName }) => (
        <TilesListSection
          list={genreList}
          titleData={{ isPageTitle: false, text: genreName! }}
        />
      )) :
      <TilesListSection
        list={listToDisplay}
        titleData={{ isPageTitle: true, text: details?.name! }}
      />
  );

  const combinedFetchStatus = useCombinedFetchStatus(
    [...profileStatuses, genresStatus],
    [...profilePausedFlags, isGenresPaused]
  );

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
        <MoviesGrid movies={listToDisplay!} />
      </KinematographySection>
      <Biography person={details!} />
    </PageContainer>
  );
};