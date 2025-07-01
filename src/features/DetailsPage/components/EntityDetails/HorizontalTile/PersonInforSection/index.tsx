import { OrUndefined } from "../../../../../../common/aliases/types/OrUndefined";
import { PersonEntries } from "../../../../types/entityEntries.types";
import { EntityEntriesSection } from "../EntityEntriesSection";
import { DetailedPersonItem } from "../../../../../../common/aliases/interfaces/person.types";

interface PersonInforSectionProps {
    detailedPersonItem: OrUndefined<DetailedPersonItem>;
}

export const PersonInforSection = ({ detailedPersonItem }: PersonInforSectionProps) => {

    const movieEntries: PersonEntries = [
        { key: "date of birth", value: detailedPersonItem?.birthday },
        { key: "place of birth", value: detailedPersonItem?.place_of_birth }
    ];

    return (
        <EntityEntriesSection entityEntries={movieEntries} />
    );
};