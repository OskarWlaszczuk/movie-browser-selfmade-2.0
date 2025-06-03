import { MovieItem, PersonItem } from "./Entities";

export interface PopularListApi<PopularListItemType> {
    page: number;
    results: PopularListItemType[];
    total_pages: number;
    total_results: number;
}

export type PopularPeopleApi = PopularListApi<PersonItem>;
export type PopularMovieApi = PopularListApi<MovieItem>;