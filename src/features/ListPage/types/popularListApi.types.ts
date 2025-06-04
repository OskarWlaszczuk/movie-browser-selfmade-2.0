import { MovieItem } from "../../../common/aliases/interfaces/movie.types";
import { PersonItem } from "../../../common/aliases/interfaces/person.types";

interface PopularListApi<PopularListItemType> {
    page: number;
    results: PopularListItemType[];
    total_pages: number;
    total_results: number;
}

export type PopularPeopleApi = PopularListApi<PersonItem>;
export type PopularMovieApi = PopularListApi<MovieItem>;