import { GenresIds } from "../types/genre.types";

export interface Movie {
    backdrop_path: string;
    genre_ids: GenresIds[];
    id: number;
    overview: string;
    poster_path: string;
    release_date: string;
    title: string;
    vote_average: number;
    vote_count: number;
}