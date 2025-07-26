import { FilterProps } from "../interfaces/FilterProps";
import { ExtractTileProps } from "./ExtractTileProps";
import { MediaListItem } from "./MediaListItem";
import { MediaListType } from "./MediaListType";

export interface MediaBrowseSectionConfig<MediaItemType extends MediaListItem> {
    key: string;
    title: string;
    listType: MediaListType;
    apiParams?: Record<string, any>;
    expandedSectionLink: string;
    extractTileProps: ExtractTileProps<MediaItemType>;
    listFiltersConfig: FilterProps[];
}