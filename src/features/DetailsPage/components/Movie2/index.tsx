import {useParams} from "react-router-dom";
import {useFetchEntityProfile} from "../../hooks/useFetchEntityProfile";
import {EntityLinksList} from "../../../../common/components/EntityLinksList";
import {HorizontalTile} from "../EntityDetails/HorizontalTile";
import {useCombinedFetchStatus} from "../../../../common/hooks/useCombinedFetchStatus";
import {Main} from "../../../../common/components/Main";
import {InfoTabs, TabConfig} from "./InfoTabs";
import {DetailedMovieItem} from "../../../../common/aliases/interfaces/movie.types";
import {MovieCredits} from "../../types/credits.types";
import {useFetchApi} from "../../../../common/hooks/useFetchApi";
import {MovieCrewGroups} from "./MovieCrewGroups";
import {MovieDetailsTab} from "./MovieDetailsTab";

export interface JobsConfiguration {
  department: string;
  jobs: string[];
}

export const useFetchJobsConfiguration = () => {
  return useFetchApi<JobsConfiguration[]>({
    queryKey: `jobs configurations`,
    endpoint: "configuration/jobs",
  });
};

export const Movie2 = () => {
  const {id, tabCategory} = useParams();

  const {
    details: movieDetails,
    credits: movieCredits,
    profileStatuses: movieProfileStatuses,
    profilePausedFlags: movieProfilePausedFlags,
  } = useFetchEntityProfile<DetailedMovieItem, MovieCredits>("movie", id!);

  const {
    data: jobsConfiguration,
    isPaused: isJobsConfigurationPaused,
    status: jobsConfigurationStatus,
  } = useFetchJobsConfiguration();

  const castLinkData = movieCredits?.cast?.map(({name, id}) => ({
    name,
    routePath: `/actor/${id}`,
  }));

  const genresLinkData = movieDetails?.genres?.map(({name, id}) => ({
    name,
    routePath: `films/genre/${name}`,
  }));

  const defaultTabCategory = "cast";
  const movieTabsConfig: TabConfig[] = [
    {
      category: defaultTabCategory,
      view: <EntityLinksList entities={castLinkData!} />,
    },
    {
      category: "crew",
      view: (
        <MovieCrewGroups
          crew={movieCredits?.crew}
          jobsConfiguration={jobsConfiguration}
        />
      ),
    },
    {
      category: "genres",
      view: <EntityLinksList entities={genresLinkData!} />,
    },
    {
      category: "details",
      view: <MovieDetailsTab movieDetails={movieDetails} />,
    },
  ];

  const combinedFetchStatus = useCombinedFetchStatus(
    [...movieProfileStatuses, jobsConfigurationStatus],
    [...movieProfilePausedFlags, isJobsConfigurationPaused]
  );

  return (
    <>
      <Main
        successContent={
          <>
            <HorizontalTile entityDetails={movieDetails} />
            <InfoTabs
              tabsConfig={movieTabsConfig}
              tabCategory={tabCategory || defaultTabCategory}
              id={id!}
            />
          </>
        }
        combinedFetchStatus={combinedFetchStatus}
        errorMessage="Details not found"
      />
    </>
  );
};
