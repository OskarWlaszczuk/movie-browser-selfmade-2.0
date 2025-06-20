import { useParams } from "react-router-dom";
import { DetailsPage } from "..";
import { creditsEndpoints, detailsEndpoints } from "../../../../common/constants/apiEndpoints";

export const Person = () => {
    const { personId } = useParams();
    const numericPersonId = Number(personId);

    return (
        <DetailsPage
            id={numericPersonId}
            creditsEndpoint={creditsEndpoints.getPersonCredits(numericPersonId)}
            detailsEndpoint={detailsEndpoints.getPersonDetails(numericPersonId)}
        />
    );
};