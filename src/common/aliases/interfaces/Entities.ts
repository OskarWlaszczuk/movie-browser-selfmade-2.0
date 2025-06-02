import { GenresIds } from "../types/genre.types";
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

export interface Person {
    id: number;
    name: string;
    profile_path: string;
    biography: string;
    birthday: string;
    place_of_birth: string;
}

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

export type TileEntity = Movie | Person | CastMember | CrewMember;

export type PeopleOrMovies = Movie[] | Person[];