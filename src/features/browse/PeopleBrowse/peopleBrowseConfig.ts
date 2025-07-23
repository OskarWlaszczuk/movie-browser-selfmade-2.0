import { PersonItem } from "../../../common/aliases/interfaces/person.types";
import { ListSectionConfig } from "../../../common/aliases/types/ListSectionConfig";

export const peopleBrowseConfig: ListSectionConfig<PersonItem>[] = [
    {
        key: 'popular',
        title: 'Popular People',
        listType: 'popular',
        apiParams: {},
        fullSectionLink: '?list=popular',
        tileData: (person) => ({
            imagePath: person.profile_path,
            name: person.name,
            detailsRoute: `person/${person.id}`,
        })
    },
];