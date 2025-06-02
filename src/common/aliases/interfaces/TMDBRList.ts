import { MovieDetails, Person } from "./Entities";

export interface PopularListApi<PopularListItemType> {
    page: number;
    results: PopularListItemType[];
    total_pages: number;
    total_results: number;
}

export type PopularPeopleApi = PopularListApi<Person>;
export type PopularMovieApi = PopularListApi<MovieDetails>;