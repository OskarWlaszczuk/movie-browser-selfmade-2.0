import { MovieItem } from "../../../common/aliases/interfaces/movie.types";
import { Genre } from "../../../common/aliases/types/genre.types";
import { ListSectionConfig } from "../../../common/aliases/types/ListSectionConfig";
import { OrUndefined } from "../../../common/aliases/types/OrUndefined";
import { extractMovieProps } from "../../../common/functions/extractMovieProps";
import { useDecadeFilterConfig } from "../../../common/hooks/useDecadeFilterConfig";
import { useGenreFilterConfig } from "../../../common/hooks/useGenreFilterConfig";
interface UseMoviesBrowseConfigProps {
    genres: OrUndefined<Genre[]>;
}

export const useMoviesBrowseConfig = ({ genres }: UseMoviesBrowseConfigProps) => {

    const decadeFilterConfig = useDecadeFilterConfig();
    const genreFilterConfig = useGenreFilterConfig({ genres });

    const moviesBrowseConfig: ListSectionConfig<MovieItem>[] = [
        {
            key: 'popular',
            title: 'Popular Movies',
            listType: 'popular',
            apiParams: {},
            expandedSectionLink: `?list=popular`,
            extractTileProps: extractMovieProps,
            listFiltersConfig: [
                decadeFilterConfig,
                genreFilterConfig
            ]
        },
        {
            key: 'top-rated',
            title: 'Top Rated',
            listType: 'top_rated',
            apiParams: {},
            expandedSectionLink: `?list=top-rated`,
            extractTileProps: extractMovieProps,
            listFiltersConfig: [
                decadeFilterConfig,
                genreFilterConfig
            ]
        },
        {
            key: 'upcoming',
            title: 'Upcoming',
            listType: 'upcoming',
            apiParams: {},
            expandedSectionLink: `?list=upcoming`,
            extractTileProps: extractMovieProps,
            listFiltersConfig: [
                genreFilterConfig
            ],
        },
    ];

    return moviesBrowseConfig;
};
