import { MovieCreditsApiResponse, PersonCreditsApiResponse } from "../types/creditsApiResponses.types";
import { TilesSectionData } from "../../../common/aliases/interfaces/TilesSectionData";
import { apiUrls } from "../../../common/constants/pictureConfigs";
import { useFetchApi } from "../../../common/hooks/useFetchApi";

export const useCredits = <CredistsApiResponse extends MovieCreditsApiResponse | PersonCreditsApiResponse>(entityId: string, endpoint: string) => {
    const { status: creditsStatus, data } = useFetchApi<CredistsApiResponse>({
        queryKey: "credits",
        url: `${apiUrls.base}/${endpoint}`,
        urlDependencies: [entityId!]
    });

    const cast = data?.cast;
    const crew = data?.crew;

    type SingleCastMember = CredistsApiResponse['cast'][number];
    type SingleCrewMember = CredistsApiResponse['crew'][number];

    type CastSectionData = TilesSectionData<SingleCastMember>;
    type CrewSectionData = TilesSectionData<SingleCrewMember>;

    const castSectionData: CastSectionData = {
        list: cast,
        titleData: {
            text: "cast",
            isPageTitle: false,
        },
    };

    const crewSectionData: CrewSectionData = {
        list: crew,
        titleData: {
            text: "Crew",
            isPageTitle: false,
        },
    };
    type CreditsSectionsData = [CastSectionData, CrewSectionData];
    const creditsSectionsData: CreditsSectionsData = [castSectionData, crewSectionData];

    return { creditsSectionsData, creditsStatus };
};