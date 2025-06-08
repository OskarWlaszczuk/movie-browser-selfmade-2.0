import { MovieItem } from "../../../common/aliases/interfaces/movie.types";
import { PersonItem } from "../../../common/aliases/interfaces/person.types";

export interface ListApiResponse<ListItemType extends MovieItem | PersonItem> {
    page: number;
    results: ListItemType[];
    total_pages: number;
    total_results: number;
}

export type PeopleListApi = ListApiResponse<PersonItem>;
export type MoviesListApi = ListApiResponse<MovieItem>;

export type ListApiUnion = PeopleListApi | MoviesListApi;