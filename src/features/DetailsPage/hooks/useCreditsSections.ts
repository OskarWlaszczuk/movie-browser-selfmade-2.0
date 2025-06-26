import { CreditsTypeUnion } from "../types/credits.types";
import { TilesSectionData } from "../../../common/aliases/interfaces/TilesSectionData";
import { OrUndefined } from "../../../common/aliases/types/OrUndefined";

type SingleCastMember = CreditsTypeUnion['cast'][number];
type SingleCrewMember = CreditsTypeUnion['crew'][number];

type CastSectionData = TilesSectionData<SingleCastMember>;
type CrewSectionData = TilesSectionData<SingleCrewMember>;

export const useCreditsSections = (credits: OrUndefined<CreditsTypeUnion>) => {
    const cast = credits?.cast;
    const crew = credits?.crew;

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

    return creditsSectionsData;
};