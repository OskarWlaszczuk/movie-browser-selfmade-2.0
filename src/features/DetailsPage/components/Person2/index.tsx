import { useParams } from "react-router-dom";
import { useFetchEntityProfile } from "../../hooks/useFetchEntityProfile";
import { DetailedPersonItem } from "../../../../common/aliases/interfaces/person.types";
import { PersonCredits } from "../../types/credits.types";

export const Person2 = () => {
    const { role, id } = useParams();

    const {
        details,
        credits,
        profileStatuses,
        profilePausedFlags,
    } = useFetchEntityProfile<DetailedPersonItem, PersonCredits>("person", id!);

    return (
        <>Person2 {id}, {role}</>
    );
}