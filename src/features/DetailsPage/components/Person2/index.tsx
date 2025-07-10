import {useNavigate, useParams} from "react-router-dom";
import {useFetchEntityProfile} from "../../hooks/useFetchEntityProfile";
import {DetailedPersonItem} from "../../../../common/aliases/interfaces/person.types";
import {PersonCredits} from "../../types/credits.types";
import {ChangeEvent} from "react";
import {TilesListSection} from "../../../../common/components/TilesListSection";

export const Person2 = () => {
  const {role, id} = useParams();
  const navigate = useNavigate();

  const {details, credits, profileStatuses, profilePausedFlags} =
    useFetchEntityProfile<DetailedPersonItem, PersonCredits>("person", id!);

  const personJobs = [
    ...new Set(credits?.crew.map(({job}) => job)),
    ...(!!credits && credits?.cast?.length > 0 ? ["Actor"] : []),
  ];

  const handleChange = ({target}: ChangeEvent<HTMLSelectElement>) => {
    const selectedRole = target.value;
    const formatterRole = selectedRole.toLowerCase().replace(" ", "-");
    navigate(`/${formatterRole}/${id}`);
  };

  const movies =
    role === "actor"
      ? credits?.cast
      : [...(credits?.crew || [])].filter(
          ({job}) => job.toLowerCase().replace(" ", "-") === role
        );

  return (
    <>
      <label>
        <select name="personJobs" value={role} onChange={handleChange}>
          {personJobs.map((job) => {
            return (
              <option value={job.toLowerCase().replace(" ", "-")}>{job}</option>
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
