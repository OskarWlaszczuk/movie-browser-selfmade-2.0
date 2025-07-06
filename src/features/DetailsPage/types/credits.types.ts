import { PersonCastMovieItem, PersonCrewMovieItem } from "../../../common/aliases/interfaces/movie.types";
import { MovieCastMember, MovieCrewMember } from "../../../common/aliases/interfaces/person.types";

export interface MovieCredits {
    cast: MovieCastMember[];
    crew: MovieCrewMember[];
}

export interface PersonCredits {
    cast: PersonCastMovieItem[];
    crew: PersonCrewMovieItem[];
}

export type CreditsTypeUnion = MovieCredits | PersonCredits;