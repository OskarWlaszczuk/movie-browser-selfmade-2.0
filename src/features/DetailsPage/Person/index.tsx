import { useParams } from "react-router-dom";
import { DetailsPage } from "..";
import { useFetchApi } from "../../../common/hooks/useFetchApi";
import { PersonDetails } from "../../../common/aliases/interfaces/Entities";
import { apiUrls } from "../../../common/constants/pictureConfigs";
import { useCredits } from "../../../common/hooks/useCredits";
import { PersonCreditsApiResponse } from "../../../common/aliases/interfaces/creditsApiResponses.types";

export const Person = () => {
    const { personId } = useParams();

    const { creditsSectionsData, creditsStatus } = useCredits<PersonCreditsApiResponse>(personId!, `person/${personId}/credits`);

    const { status: personStatus, data: person } = useFetchApi<PersonDetails>({
        queryKey: "movieDetails",
        url: `${apiUrls.base}/person/${personId}`,
        urlDependencies: [personId!]
    });

    return (
        <DetailsPage
            details={person!}
            sectionsData={creditsSectionsData}
            fetchStatuses={[personStatus, creditsStatus]}
        />
    );
}