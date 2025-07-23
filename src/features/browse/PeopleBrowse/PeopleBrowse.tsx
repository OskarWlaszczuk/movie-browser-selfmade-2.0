import { PersonItem } from "../../../common/aliases/interfaces/person.types";
import { mediaSingularTypes } from "../../../common/constants/entityTypes";
import { MediaBrowse } from "../components/Browse";
import { peopleBrowseConfig } from "./peopleBrowseConfig";

export const PeopleBrowse = () => {
    return (
        <>
            <MediaBrowse<PersonItem> mediaConfig={peopleBrowseConfig} mediaType={mediaSingularTypes.PERSON} />
        </>
    );
};