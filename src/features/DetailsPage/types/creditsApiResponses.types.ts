import { SimplefiedMovieItem } from "../../../common/aliases/interfaces/movie.types";
import { CastMember, CrewMember } from "../../../common/aliases/interfaces/person.types";

export interface MovieCreditsApiResponse {
    cast: CastMember[];
    crew: CrewMember[];
}

export interface PersonCreditsApiResponse {
    cast: SimplefiedMovieItem[];
    crew: SimplefiedMovieItem[];
}