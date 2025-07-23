import { PersonItem } from "../../../common/aliases/interfaces/person.types";
import { mediaSingularTypes } from "../../../common/constants/entityTypes";
import { BrowseOverview } from "../components/Browse";
import { peopleBrowseConfig } from "./peopleBrowseConfig";

export const PeopleBrowse = () => {
    return (
        <>
            <BrowseOverview<PersonItem> mediaConfig={peopleBrowseConfig} mediaType={mediaSingularTypes.PERSON} />
        </>
    );
};