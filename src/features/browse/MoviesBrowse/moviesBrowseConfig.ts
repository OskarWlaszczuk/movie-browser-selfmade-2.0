import { MovieItem } from "../../../common/aliases/interfaces/movie.types";
import { ListSectionConfig } from "../../../common/aliases/types/ListSectionConfig";

const baseMovieData = (movie: MovieItem) => ({
    imagePath: movie.poster_path,
    name: movie.title,
    detailsRoute: `movie/${movie.id}`,
})

export const moviesBrowseConfig: ListSectionConfig<MovieItem>[] = [
    {
        key: 'popular',
        title: 'Popular Movies',
        listType: 'popular',
        apiParams: {},
        expandedSectionLink: `?list=popular`,
        extractTileProps: baseMovieData,
    },
    {
        key: 'top-rated',
        title: 'Top Rated',
        listType: 'top_rated',
        apiParams: {},
        expandedSectionLink: `?list=top-rated`,
        extractTileProps: baseMovieData,
    },
    {
        key: 'upcoming',
        title: 'Upcoming',
        listType: 'upcoming',
        apiParams: {},
        expandedSectionLink: `?list=upcoming`,
        extractTileProps: baseMovieData,
    },
];