import { Movie } from "./Movie";
import { Person } from "./Person";

export interface TMDBRList<ResultType> {
    page: number;
    results: ResultType[];
    total_pages: number;
    total_results: number;
}


export type PopularPeopleResponse = TMDBRList<Person>;
export type PopularMoviesResponse = TMDBRList<Movie>;