import { TilesList } from "./styled";
import { SectionHeader } from "../SectionHeader";
import { renderVerticalTile } from "../../functions/renderVerticalTile";
import { OrUndefined } from "../../aliases/types/OrUndefined";
import { TileEntity } from "../../aliases/interfaces/TileEntity";
interface TitleData {
    text: string;
    isPageTitle: boolean;
}
interface TilesListSectionProps {
    list: OrUndefined<TileEntity[]>;
    titleData: TitleData;
};

export const TilesListSection = ({ list, titleData }: TilesListSectionProps) => (
    <>
        {
            (list && list.length > 0) && (
                <>
                    <SectionHeader text={titleData.text} setAsPageTitle={titleData.isPageTitle} />
                    <TilesList>
                        {list?.map((item) => renderVerticalTile(item))}
                    </TilesList>
                </>
            )
        }
    </>
);