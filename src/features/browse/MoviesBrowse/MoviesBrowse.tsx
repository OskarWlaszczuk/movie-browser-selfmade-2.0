import { MovieItem } from "../../../common/aliases/interfaces/movie.types";
import { mediaSingularTypes } from "../../../common/constants/entityTypes";
import { BrowseExpandedSection } from "../components/BrowseExpandedSection";
import { useMoviesBrowseConfig } from "./useMoviesBrowseConfig";
import { useCombinedFetchStatus } from "../../../common/hooks/useCombinedFetchStatus";
import { BrowseSections } from "../components/BrowseSections";
import { useFetchGenres } from "../../../common/hooks/useFetchGenres";
import { BrowseSectionConfigWithList } from "../../../common/aliases/interfaces/ExtendedListSectionConfig";
import { useListParam } from "../../../common/hooks/useListParam";
import { useFetchMediaLists } from "../../../common/hooks/useFetchMediaList";
import { Main } from "../../../common/components/Main";
import { extractMovieProps } from "../../../common/functions/extractMovieProps";

export const MoviesBrowse = () => {
    const listParam = useListParam();

    const { genres, genresStatus, isGenresPaused } = useFetchGenres();
    const moviesBrowseConfig = useMoviesBrowseConfig({ genres });

    const {
        statuses: moviesListsStatuses,
        pausedFlags: moviesListsPausedFlags,
        mediaLists: moviesLists
    } = useFetchMediaLists({ mediaConfig: moviesBrowseConfig, mediaType: mediaSingularTypes.MOVIE });

    const combinedFetchStatus = useCombinedFetchStatus([...moviesListsStatuses, genresStatus], [...moviesListsPausedFlags, isGenresPaused]);

    const mediaBrowseSections: BrowseSectionConfigWithList<MovieItem>[] = moviesBrowseConfig.map((config, index) => ({
        ...config,
        mediaList: moviesLists[index]?.results,
    }));

    const expandedMediaSection = mediaBrowseSections.find(({ key }) => key === listParam);

    const view = (
        !!listParam && !!expandedMediaSection ?
            <BrowseExpandedSection<MovieItem>
                extractTileProps={extractMovieProps}
                mediaList={expandedMediaSection.mediaList}
                filtersConfig={expandedMediaSection.expandedSectionFiltersConfig}
            /> :
            <BrowseSections<MovieItem>
                mediaSections={mediaBrowseSections}
            />
    );

    return (
        <Main
            successContent={view}
            combinedFetchStatus={combinedFetchStatus}
        />
    );
};