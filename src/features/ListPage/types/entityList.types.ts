import { SimplefiedMovieItem } from "../../../common/aliases/interfaces/movie.types";
import { SimplefiedPersonItem } from "../../../common/aliases/interfaces/person.types";
import { PeopleOrMovies } from "../../../common/aliases/types/PeopleOrMovies";

export interface EntityList<ResultsType extends PeopleOrMovies> {
    page: number;
    results: ResultsType;
    total_pages: number;
    total_results: number;
}

export type PeopleList = EntityList<SimplefiedPersonItem[]>;
export type MoviesList = EntityList<SimplefiedMovieItem[]>;

export type EntityListUnion = PeopleList | MoviesList;