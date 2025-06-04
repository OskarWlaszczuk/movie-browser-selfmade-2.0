import { useParams } from "react-router-dom";
import { useCredits } from "../../hooks/useCredits";
import { PersonCreditsApiResponse } from "../../types/creditsApiResponses.types";
import { PersonDetails } from "../../../../common/aliases/interfaces/person.types";
import { useFetchDetails } from "../../hooks/useFetchDetails";
import { DetailsPage } from "..";

export const Person = () => {
    const { personId } = useParams();

    const { creditsSectionsData, creditsStatus } = useCredits<PersonCreditsApiResponse>(personId!, `person/${personId}/credits`);
    const { details, detailsStatus } = useFetchDetails<PersonDetails>(personId!, `person/${personId}`);


    return (
        <DetailsPage
            details={details!}
            sectionsData={creditsSectionsData}
            fetchStatuses={[detailsStatus, creditsStatus]}
        />
    );
}