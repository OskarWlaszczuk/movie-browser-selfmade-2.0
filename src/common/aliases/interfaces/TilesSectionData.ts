import { OrUndefined } from "../types/OrUndefined";
import { CastMember, CrewMember, MovieItem } from "./Entities";

interface TitleData {
    text: string;
    isPageTitle: boolean;
}

export interface TilesSectionData<ListItem extends MovieItem | CastMember | CrewMember> {
    list: OrUndefined<ListItem[]>;
    titleData: TitleData;
}