import { Tile } from "../../Tile";
import { TileEntity } from "../../../aliases/interfaces/TileEntity";
import { OrUndefined } from "../../../aliases/types/OrUndefined";
import { selectVerticalTileProps } from "./selectVerticalTileProps";

interface VerticalTileProps {
    tileEntity: OrUndefined<TileEntity>;
}

export const VerticalTile = ({ tileEntity }: VerticalTileProps) => {
    const verticalTileProps = selectVerticalTileProps(tileEntity);

    return <Tile {...verticalTileProps!} />
};