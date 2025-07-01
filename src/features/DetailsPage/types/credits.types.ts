import { PersonCastMovieItem, PersonCrewMovieItem } from "../../../common/aliases/interfaces/movie.types";
import { MovieCastMember, MovieCrewMember } from "../../../common/aliases/interfaces/person.types";

interface MovieCredits {
    cast: MovieCastMember[];
    crew: MovieCrewMember[];
}

interface PersonCredits {
    cast: PersonCastMovieItem[];
    crew: PersonCrewMovieItem[];
}

export type CreditsTypeUnion = MovieCredits | PersonCredits;