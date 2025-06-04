import { GenreResponse, GenresIds } from "../types/genre.types";
import { OrNull } from "../types/OrNull";

interface ProductionCountry {
    iso_3166_1: string;
    name: string;
}

interface SharedMovieData {
    backdrop_path: OrNull<string>;
    id: number;
    overview: string;
    poster_path: OrNull<string>;
    release_date: string;
    title: string;
    vote_average: number;
    vote_count: number;
}

export interface MovieItem extends SharedMovieData {
    genre_ids: GenresIds;
}

export interface MovieDetails extends SharedMovieData {
    production_countries: ProductionCountry[];
    genres: GenreResponse[];
}