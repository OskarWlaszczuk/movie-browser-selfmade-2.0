import { OrUndefined } from "../types/OrUndefined";
import { TileEntity } from "../types/TileEntity";

interface TitleData {
    text: string;
    isPageTitle: boolean;
}

export interface TilesSectionData<ListItem extends TileEntity> {
    list: OrUndefined<ListItem[]>;
    titleData: TitleData;
}