import {JobsConfiguration} from "..";
import {OrUndefined} from "../../../../../common/aliases/types/OrUndefined";
import {
  EntityLinkData,
  EntityLinksList,
} from "../../../../../common/components/EntityLinksList";
import {MovieCredits} from "../../../types/credits.types";

interface GroupedMovieCrewProps {
  crew: OrUndefined<MovieCredits["crew"]>;
  jobsConfiguration: OrUndefined<JobsConfiguration[]>;
}

const filterCrewByGroup = (
  crew: MovieCredits["crew"],
  department: string,
  jobs: string[]
) => {
  return crew.filter(
    ({job, department: memberDepartment}) =>
      jobs.includes(job) && memberDepartment === department
  );
};

const formatCrewToRender = (
  crewGroup: MovieCredits["crew"]
): EntityLinkData[] => {
  return crewGroup.map(({name, id, job}) => {
    const formattedJob = job.toLowerCase().replaceAll(" ", "-");
    return {
      name,
      routePath: `/${formattedJob}/${id}`,
    };
  });
};

export const MovieCrewGroups = ({
  crew,
  jobsConfiguration,
}: GroupedMovieCrewProps) => {
  if (!crew || !jobsConfiguration) return null;

  return (
    <section>
      {jobsConfiguration.map(({department, jobs}) => {
        const matchedCrew = filterCrewByGroup(crew, department, jobs);

        if (!matchedCrew.length) return null;

        const formattedCrew = formatCrewToRender(matchedCrew);

        return (
          <article key={department}>
            <h3>{department}</h3>
            <EntityLinksList entities={formattedCrew} />
          </article>
        );
      })}
    </section>
  );
};
