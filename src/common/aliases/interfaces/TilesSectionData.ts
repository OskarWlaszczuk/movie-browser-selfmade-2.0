import { OrUndefined } from "../types/OrUndefined";
import { MovieItem } from "./movie.types";
import { CastMember, CrewMember } from "./person.types";

interface TitleData {
    text: string;
    isPageTitle: boolean;
}

export interface TilesSectionData<ListItem extends MovieItem | CastMember | CrewMember> {
    list: OrUndefined<ListItem[]>;
    titleData: TitleData;
}