import { useLocation, useParams } from "react-router-dom";
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
import { PageContainer, MoviesList, MovieTile, KinematographySection, PersonDetailsSection, PersonPicture, Description } from "./styled";
import { Picture } from "../../../../common/components/Picture";
import { apiUrls, pictureWidths } from "../../../../common/constants/pictureConfigs";
import { Movie } from "../Movie";

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

  const genreKey = "genre";
  const filteredGenresNames = new URLSearchParams(search).getAll(genreKey);
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

  const moviesGroupedByGenres = (
    filteredGenresIDs
      ?.map(filteredID => ({
        genreList: [...listToDisplay?.filter(({ genre_ids }) => genre_ids.includes(filteredID)) || []],
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
            URLParams={{
              id: id!,
              role: role!,
            }}
            credits={credits}
          />
          <GenreFilter
            genres={genres}
          />
        </StyledFiltersPanel>
        <MoviesList>
          {
            listToDisplay?.map(({ poster_path }) => (
              <MovieTile src={`${apiUrls.image}${pictureWidths.tile}${poster_path}`} />
            ))
          }
        </MoviesList>
      </KinematographySection>
      <PersonDetailsSection>
        <PersonPicture src={`${apiUrls.image}${pictureWidths.tile}${details?.profile_path}`} />
        <Description>{details?.biography}</Description>
      </PersonDetailsSection>
    </PageContainer>
  );
};