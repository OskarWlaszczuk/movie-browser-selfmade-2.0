import { CastMember, CrewMember, MovieItem } from "./Entities";

export interface MovieCreditsApiResponse {
    cast: CastMember[];
    crew: CrewMember[];
}

export interface PersonCreditsApiResponse {
    cast: MovieItem[];
    crew: MovieItem[];
}