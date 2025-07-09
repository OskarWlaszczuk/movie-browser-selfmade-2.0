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

export interface JobsConfiguration {
  department: string;
  jobs: string[];
}

const useFetchJobsConfiguration = () => {
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
    status: jobsConfigurationStatus,
    isPaused: isJobsConfigurationPaused,
  } = useFetchJobsConfiguration();

  const castLinkData = movieCredits?.cast?.map(({name, id}) => ({
    name,
    routePath: `/actor/${id}`,
  }));

  const defaultTabCategory = "cast";
  const movieTabsConfig: TabConfig[] = [
    {
      category: defaultTabCategory,
      view: (
        <section>
          <EntityLinksList entities={castLinkData!} />,
        </section>
      ),
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
