import { CreditsType } from "../types/credits.types";
import { TilesSectionData } from "../../../common/aliases/interfaces/TilesSectionData";

type SingleCastMember = CreditsType['cast'][number];
type SingleCrewMember = CreditsType['crew'][number];

type CastSectionData = TilesSectionData<SingleCastMember>;
type CrewSectionData = TilesSectionData<SingleCrewMember>;

export const useCreditsSections = (credits: CreditsType) => {
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

    return { creditsSectionsData };
};