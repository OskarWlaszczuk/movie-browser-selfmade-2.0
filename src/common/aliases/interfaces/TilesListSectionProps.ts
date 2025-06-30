import { OrUndefined } from "../types/OrUndefined";
import { SimplefiedMovieItem } from "./movie.types";
import { CastMember, CrewMember, SimplefiedPersonItem } from "./person.types";

export interface TilesListSectionProps {
    list: OrUndefined<SimplefiedMovieItem[] | SimplefiedPersonItem[] | CastMember[] | CrewMember[]>;
    titleData: {
        text: string;
        isPageTitle: boolean;
    };
};