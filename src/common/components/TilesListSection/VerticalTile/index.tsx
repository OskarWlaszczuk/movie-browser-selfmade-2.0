import { Tile } from "../../Tile";
import { TileEntity } from "../../../aliases/interfaces/TileEntity";
import { OrUndefined } from "../../../aliases/types/OrUndefined";
import { useSelectVerticalTileProps } from "./useSelectVerticalTileProps";

interface VerticalTileProps {
    tileEntity: OrUndefined<TileEntity>;
}

export const VerticalTile = ({ tileEntity }: VerticalTileProps) => {
    const verticalTileProps = useSelectVerticalTileProps(tileEntity);

    return <Tile {...verticalTileProps!} />
};