import { SimplefiedMovieItem } from "../../../common/aliases/interfaces/movie.types";
import { CastMember, CrewMember } from "../../../common/aliases/interfaces/person.types";

export interface MovieCredits {
    cast: CastMember[];
    crew: CrewMember[];
}

export interface PersonCredits {
    cast: SimplefiedMovieItem[];
    crew: SimplefiedMovieItem[];
}

export type CreditsType = MovieCredits | PersonCredits;