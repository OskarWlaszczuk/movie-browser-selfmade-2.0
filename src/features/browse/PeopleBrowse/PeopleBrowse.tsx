import { PersonItem } from "../../../common/aliases/interfaces/person.types";
import { BrowseSections } from "../components/BrowseSections";
import { ExpandedBrowseSection } from "../components/ExpandedBrowseSection";
import { mediaSingularTypes } from "../../../common/constants/entityTypes";
import { useListParam } from "../../../common/hooks/useListParam";
import { usePeopleBrowseConfig } from "./usePeopleBrowseConfig";

export const PeopleBrowse = () => {
    const listParam = useListParam();
    const peopleBrowseConfig = usePeopleBrowseConfig();

    const view = (
        !!listParam ?
            <ExpandedBrowseSection<PersonItem>
                mediaConfig={peopleBrowseConfig}
                listParam={listParam}
                mediaType={mediaSingularTypes.PERSON}
            />
            :
            <BrowseSections<PersonItem>
                mediaConfig={peopleBrowseConfig}
                mediaType={mediaSingularTypes.PERSON}
            />
    );

    return (
        <>
            {view}
        </>
    );
};