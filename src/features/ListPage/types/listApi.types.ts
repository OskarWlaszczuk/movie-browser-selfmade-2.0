import { MovieItem } from "../../../common/aliases/interfaces/movie.types";
import { PersonItem } from "../../../common/aliases/interfaces/person.types";
import { PeopleOrMovies } from "../../../common/aliases/types/PeopleOrMovies";

export interface ListApiResponse<ResultsType extends PeopleOrMovies> {
    page: number;
    results: ResultsType;
    total_pages: number;
    total_results: number;
}

export type PeopleListApi = ListApiResponse<PersonItem[]>;
export type MoviesListApi = ListApiResponse<MovieItem[]>;

export type ListApiUnion = PeopleListApi | MoviesListApi;