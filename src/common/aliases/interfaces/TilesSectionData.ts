import { OrUndefined } from "../types/OrUndefined";
import { SimplefiedMovieItem } from "./movie.types";
import { CastMember, CrewMember } from "./person.types";

interface TitleData {
    text: string;
    isPageTitle: boolean;
}

export interface TilesSectionData<ListItem extends SimplefiedMovieItem | CastMember | CrewMember> {
    list: OrUndefined<ListItem[]>;
    titleData: TitleData;
}