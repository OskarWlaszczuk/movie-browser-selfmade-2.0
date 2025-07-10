import {useNavigate, useParams} from "react-router-dom";
import {useFetchEntityProfile} from "../../hooks/useFetchEntityProfile";
import {DetailedPersonItem} from "../../../../common/aliases/interfaces/person.types";
import {PersonCredits} from "../../types/credits.types";
import {ChangeEvent} from "react";
import {TilesListSection} from "../../../../common/components/TilesListSection";

export const Person2 = () => {
  const {job, id} = useParams();
  const navigate = useNavigate();

  const {details, credits, profileStatuses, profilePausedFlags} =
    useFetchEntityProfile<DetailedPersonItem, PersonCredits>("person", id!);

  const personJobs = [
    ...new Set(credits?.crew.map((member) => member.job)),
    ...(!!credits && credits?.cast?.length > 0 ? ["Actor"] : []),
  ];

  const handleChange = ({target}: ChangeEvent<HTMLSelectElement>) => {
    const selectedRole = target.value;
    const formatterRole = selectedRole.toLowerCase().replace(" ", "-");
    navigate(`/${formatterRole}/${id}`);
  };

  const movies =
    job === "actor"
      ? credits?.cast
      : [...(credits?.crew || [])].filter(
          (member) => member.job.toLowerCase().replace(" ", "-") === job
        );

  return (
    <>
      <label>
        <select name="personJobs" value={job} onChange={handleChange}>
          {personJobs.map((personJob) => {
            return (
              <option value={personJob.toLowerCase().replace(" ", "-")}>{personJob}</option>
            );
          })}
        </select>
        <TilesListSection
          list={movies}
          titleData={{isPageTitle: true, text: "Florence Pugh"}}
        />
      </label>
    </>
  );
};
