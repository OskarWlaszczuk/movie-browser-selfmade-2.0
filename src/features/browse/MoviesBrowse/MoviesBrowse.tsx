import { MovieItem } from "../../../common/aliases/interfaces/movie.types";
import { mediaSingularTypes } from "../../../common/constants/entityTypes";
import { useMoviesBrowseConfig } from "./useMoviesBrowseConfig";
import { useListParam } from "../../../common/hooks/useListParam";
import { BrowseSections } from "../components/BrowseSections";
import { ExpandedBrowseSection } from "../components/ExpandedBrowseSection";

export const MoviesBrowse = () => {
    const listParam = useListParam();
    const moviesBrowseConfig = useMoviesBrowseConfig();

    const view = (
        !!listParam ?
            <ExpandedBrowseSection
                mediaConfig={moviesBrowseConfig}
                listParam={listParam}
                mediaType={mediaSingularTypes.MOVIE}
            />
            :
            <BrowseSections<MovieItem>
                mediaConfig={moviesBrowseConfig}
                mediaType={mediaSingularTypes.MOVIE}
            />
    );

    return (
        <>
            {view}
        </>
    );
};