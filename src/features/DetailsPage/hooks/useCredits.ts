import { MovieCreditsApiResponse, PersonCreditsApiResponse } from "../types/creditsApiResponses.types";
import { TilesSectionData } from "../../../common/aliases/interfaces/TilesSectionData";
import { useFetchApi } from "../../../common/hooks/useFetchApi";
import { TileEntityId } from "../../../common/aliases/interfaces/TileEntity";

type CreditsResponse = MovieCreditsApiResponse | PersonCreditsApiResponse;

export const useCredits = <CredistsApiResponse extends CreditsResponse>(entityId: TileEntityId, endpoint: string) => {
    const { status: creditsStatus, data } = useFetchApi<CredistsApiResponse>({
        queryKey: "credits",
        endpoint,
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