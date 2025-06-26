import { nanoid } from "@reduxjs/toolkit";
import { TilesListSection } from "../../../../../common/components/TilesListSection";
import { useCreditsSections } from "../../../hooks/useCreditsSections";
import { CreditsTypeUnion } from "../../../types/credits.types";
import { OrUndefined } from "../../../../../common/aliases/types/OrUndefined";

interface CreditsProps {
    credists: OrUndefined<CreditsTypeUnion>;
}

export const Credits = ({ credists }: CreditsProps) => {

    const creditsSectionsData = useCreditsSections(credists);

    return (
        <>
            {
                creditsSectionsData.map(sectionData => (
                    <TilesListSection key={nanoid()} {...sectionData} />
                ))
            }
        </>
    );
};