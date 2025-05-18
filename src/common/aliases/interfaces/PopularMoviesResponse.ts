import { Movie } from "./Movie";

export interface PopularMoviesResponse {
    page: number
    results: Movie[];
    total_pages: number;
    total_results: number;
}