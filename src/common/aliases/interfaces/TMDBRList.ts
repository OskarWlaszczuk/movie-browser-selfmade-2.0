import { Movie } from "./Movie";
import { Person } from "./Person";

export interface PopularListApi<PopularListItemType> {
    page: number;
    results: PopularListItemType[];
    total_pages: number;
    total_results: number;
}

export type PopularPeopleApi = PopularListApi<Person>;
export type PopularMovieApi = PopularListApi<Movie>;