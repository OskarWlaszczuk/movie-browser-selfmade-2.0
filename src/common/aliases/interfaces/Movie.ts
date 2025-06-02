import { GenresIds } from "../types/genre.types";
import { OrNull } from "../types/OrNull";

export interface Movie {
    backdrop_path: OrNull<string>;
    genre_ids: GenresIds;
    id: number;
    overview: string;
    poster_path: OrNull<string>;
    release_date: string;
    title: string;
    vote_average: number;
    vote_count: number;
}