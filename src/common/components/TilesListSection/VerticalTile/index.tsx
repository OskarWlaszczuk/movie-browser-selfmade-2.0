import { Tile } from "../../Tile";
import { TileEntity } from "../../../aliases/interfaces/TileEntity";
import { OrUndefined } from "../../../aliases/types/OrUndefined";
import { getTilePropsConfigs } from "./getTilePropsConfigs";

interface VerticalTileProps {
    tileEntity: OrUndefined<TileEntity>;
}

export const VerticalTile = ({ tileEntity }: VerticalTileProps) => {
    const tilePropsConfigs = getTilePropsConfigs();

    const verticalTileProps = (
        tilePropsConfigs.find(
            ({ typeGuard }) => typeGuard(tileEntity!) === true
        )?.tileProps(tileEntity as any)
    );

    return <Tile {...verticalTileProps!} />
};