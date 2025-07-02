import { Genre, GenresIds } from "../types/genre.types";
import { OrEmpty } from "../types/OrEmpty";
import { OrNull } from "../types/OrNull";
import { ProductionCountry } from "./ProductionCountry";
import { SharedTileEntityData } from "./SharedTileEntityData";
interface BaseMovieData extends SharedTileEntityData {
    backdrop_path: OrNull<string>;
    overview: OrNull<string>;
    poster_path: OrNull<string>;
    release_date: OrNull<string>;
    title: string;
    vote_average: number;
    vote_count: number;
}

export interface SimplefiedMovieItem extends BaseMovieData {
    genre_ids: GenresIds;
}

export interface DetailedMovieItem extends BaseMovieData {
    production_countries: OrEmpty<ProductionCountry[]>;
    genres: OrEmpty<Genre[]>;
}

export interface PersonCastMovieItem extends BaseMovieData, SimplefiedMovieItem {
    character: string;
}

export interface PersonCrewMovieItem extends BaseMovieData, SimplefiedMovieItem {
    department: string;
}