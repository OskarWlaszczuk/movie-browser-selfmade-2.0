import { SimplefiedMovieItem } from "../../../common/aliases/interfaces/movie.types";
import { SimplefiedPersonItem } from "../../../common/aliases/interfaces/person.types";

export interface EntityList<ResultsType extends SimplefiedMovieItem[] | SimplefiedPersonItem[]> {
    page: number;
    results: ResultsType;
    total_pages: number;
    total_results: number;
}

export type PeopleList = EntityList<SimplefiedPersonItem[]>;
export type MoviesList = EntityList<SimplefiedMovieItem[]>;

export type EntityListUnion = PeopleList | MoviesList;