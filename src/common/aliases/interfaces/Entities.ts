import { GenreResponse, GenresIds } from "../types/genre.types";
import { OrNull } from "../types/OrNull";

export interface CastMember {
    id: number;
    name: string;
    profile_path: string;
    character: string;
}

export interface CrewMember {
    id: number;
    name: string;
    profile_path: string;
    job: string;
}

export interface PersonItem {
    id: number;
    name: string;
    profile_path: string;
}

export interface PersonDetails extends PersonItem {
    biography: string;
    birthday: string;
    place_of_birth: string;
}

interface ProductionCountry {
    iso_3166_1: string;
    name: string;
};

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

export type TileEntity = MovieItem | PersonItem | CastMember | CrewMember;

export type PeopleOrMovies = MovieItem[] | PersonItem[];