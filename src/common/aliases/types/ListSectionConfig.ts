import { MediaListType } from "../../components/MediaCarousel";

export interface ListSectionConfig {
    key: string;
    title: string;
    listType: MediaListType;
    apiParams?: Record<string, any>;
    fullSectionLink: string;
}