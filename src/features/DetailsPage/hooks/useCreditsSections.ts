import { CreditsTypeUnion } from "../types/credits.types";
import { TilesListSectionProps } from "../../../common/aliases/interfaces/TilesListSectionProps";
import { OrUndefined } from "../../../common/aliases/types/OrUndefined";

export const useCreditsSections = (credits: OrUndefined<CreditsTypeUnion>) => {
    const cast = credits?.cast;
    const crew = credits?.crew;

    const castSectionData: TilesListSectionProps = {
        list: cast,
        titleData: {
            text: "cast",
            isPageTitle: false,
        },
    };

    const crewSectionData: TilesListSectionProps = {
        list: crew,
        titleData: {
            text: "Crew",
            isPageTitle: false,
        },
    };

    const creditsSectionsData: TilesListSectionProps[] = [castSectionData, crewSectionData];

    return creditsSectionsData;
};