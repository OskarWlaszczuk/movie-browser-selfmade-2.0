import { BrowseSection } from "../../../../common/components/BrowseSection";
import { MediaListItem } from "../../../../common/aliases/types/MediaListItem";
import { BrowseSectionConfigWithList } from "../../../../common/aliases/interfaces/ExtendedListSectionConfig";

interface BrowseSectionsProps<BrowseSectionItemType extends MediaListItem> {
    mediaSections: BrowseSectionConfigWithList<BrowseSectionItemType>[]
}

export const BrowseSections = <BrowseSectionItemType extends MediaListItem>(
    { mediaSections }: BrowseSectionsProps<BrowseSectionItemType>
) => {

    return (
        <>
            {
                mediaSections.map(({ title, expandedSectionLink, mediaList, extractTileProps }) => (
                    <BrowseSection<BrowseSectionItemType>
                        extractTileProps={extractTileProps}
                        title={title}
                        expandedSectionLink={expandedSectionLink}
                        mediaList={mediaList}
                    />
                ))
            }
        </>
    );
};