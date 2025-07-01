import { ReactNode } from "react";
import { EntitySingularType } from "../types/entityTypes.types";
import { OrUndefined } from "../types/OrUndefined";
import { PicturePath } from "../types/PicturePath";

export interface TileProps {
    picturePath: PicturePath;
    title: OrUndefined<string>;
    entityType: EntitySingularType;
    detailsRoutePath?: string;
    infoContent?: ReactNode;
    extraContent?: ReactNode;
    useHorizontalLayout?: boolean;
    useTwoColumnsLayout?: boolean;
};