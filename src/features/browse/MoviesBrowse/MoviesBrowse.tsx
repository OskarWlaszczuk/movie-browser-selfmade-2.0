import { mediaSingularTypes } from "../../../common/constants/entityTypes";
import { MediaBrowse } from "../components/Browse";
import { moviesBrowseConfig } from "./moviesBrowseConfig";

export const MoviesBrowse = () => {

    return (
        <>
            <MediaBrowse mediaConfig={moviesBrowseConfig} mediaType={mediaSingularTypes.MOVIE} />
        </>
    );
};