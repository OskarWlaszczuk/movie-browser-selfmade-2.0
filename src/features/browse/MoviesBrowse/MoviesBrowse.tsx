import { MovieItem } from "../../../common/aliases/interfaces/movie.types";
import { mediaSingularTypes } from "../../../common/constants/entityTypes";
import { MediaBrowse } from "../components/Browse";
import { moviesBrowseConfig } from "./moviesBrowseConfig";

export const MoviesBrowse = () => {

    return (
        <>
            <MediaBrowse<MovieItem> mediaConfig={moviesBrowseConfig} mediaType={mediaSingularTypes.MOVIE} />
        </>
    );
};