import { MovieItem } from "./movie.types";
import { PersonItem } from "./person.types";

interface PopularListApi<PopularListItemType> {
    page: number;
    results: PopularListItemType[];
    total_pages: number;
    total_results: number;
}

export type PopularPeopleApi = PopularListApi<PersonItem>;
export type PopularMovieApi = PopularListApi<MovieItem>;