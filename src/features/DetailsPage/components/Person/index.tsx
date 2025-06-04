import { useParams } from "react-router-dom";
import { useCredits } from "../../../../common/hooks/useCredits";
import { PersonCreditsApiResponse } from "../../../../common/aliases/interfaces/creditsApiResponses.types";
import { PersonDetails } from "../../../../common/aliases/interfaces/person.types";
import { useFetchDetails } from "../../../../common/hooks/useFetchDetails";
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