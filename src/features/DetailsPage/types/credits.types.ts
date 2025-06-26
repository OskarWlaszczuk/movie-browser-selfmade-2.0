import { SimplefiedMovieItem } from "../../../common/aliases/interfaces/movie.types";
import { CastMember, CrewMember } from "../../../common/aliases/interfaces/person.types";

interface MovieCredits {
    cast: CastMember[];
    crew: CrewMember[];
}

interface PersonCredits {
    cast: SimplefiedMovieItem[];
    crew: SimplefiedMovieItem[];
}

export type CreditsTypeUnion = MovieCredits | PersonCredits;