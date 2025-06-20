import { useParams } from "react-router-dom";
import { useCredits } from "../../hooks/useCredits";
import { PersonCreditsApiResponse } from "../../types/creditsApiResponses.types";
import { DetailedPersonItem } from "../../../../common/aliases/interfaces/person.types";
import { useFetchDetails } from "../../hooks/useFetchDetails";
import { DetailsPage } from "..";
import { creditsEndpoints, detailsEndpoints } from "../../../../common/constants/apiEndpoints";

export const Person = () => {
    const { personId } = useParams();
    const numericPersonId = Number(personId);

    const { creditsSectionsData, creditsStatus } = useCredits<PersonCreditsApiResponse>(
        numericPersonId!,
        creditsEndpoints.getPersonCredits(numericPersonId),
    );
    
    const { details, detailsStatus } = useFetchDetails<DetailedPersonItem>(
        numericPersonId,
        detailsEndpoints.getPersonDetails(numericPersonId),
    );


    return (
        <DetailsPage
            details={details!}
            sectionsData={creditsSectionsData}
            fetchStatuses={[detailsStatus, creditsStatus]}
        />
    );
};