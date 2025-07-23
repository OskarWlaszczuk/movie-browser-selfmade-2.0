import { ListSectionConfig } from "../../../common/aliases/types/ListSectionConfig";
import { mediaPluralTypes } from "../../../common/constants/entityTypes";

export const moviesBrowseConfig: ListSectionConfig[] = [
    {
        key: 'popular',
        title: 'Popular Movies',
        listType: 'popular',
        apiParams: {},
        fullSectionLink: `${mediaPluralTypes.MOVIES}/?list=popular`,
    },
    {
        key: 'top-rated',
        title: 'Top Rated',
        listType: 'top_rated',
        apiParams: {},
        fullSectionLink: `${mediaPluralTypes.MOVIES}/?list=top-rated`,
    },
    {
        key: 'upcoming',
        title: 'Upcoming',
        listType: 'upcoming',
        apiParams: {},
        fullSectionLink: `${mediaPluralTypes.MOVIES}/?list=upcoming`,
    },
];