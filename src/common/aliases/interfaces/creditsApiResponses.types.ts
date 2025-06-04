import { MovieItem } from "./movie.types";
import { CastMember, CrewMember } from "./person.types";

export interface MovieCreditsApiResponse {
    cast: CastMember[];
    crew: CrewMember[];
}

export interface PersonCreditsApiResponse {
    cast: MovieItem[];
    crew: MovieItem[];
}