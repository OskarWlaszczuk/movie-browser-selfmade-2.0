import { MovieItem } from "../../../common/aliases/interfaces/movie.types";
import { mediaSingularTypes } from "../../../common/constants/entityTypes";
import { BrowseOverview } from "../components/Browse";
import { moviesBrowseConfig } from "./moviesBrowseConfig";

export const MoviesBrowse = () => {

    return (
        <>
            <BrowseOverview<MovieItem> mediaConfig={moviesBrowseConfig} mediaType={mediaSingularTypes.MOVIE} />
        </>
    );
};