import { OrUndefined } from "../types/OrUndefined";
import { PersonCastMovieItem, PersonCrewMovieItem, SimplefiedMovieItem } from "./movie.types";
import { MovieCastMember, MovieCrewMember, SimplefiedPersonItem } from "./person.types";

export interface TilesListSectionProps {
    list: OrUndefined<
        SimplefiedMovieItem[] |
        SimplefiedPersonItem[] |
        MovieCastMember[] | MovieCrewMember[] |
        PersonCastMovieItem[] |
        PersonCrewMovieItem[]
    >;
    titleData: {
        text: string;
        isPageTitle: boolean;
    };
};