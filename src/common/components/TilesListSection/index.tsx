import { TilesList } from "./styled";
import { SectionHeader } from "../SectionHeader";
import { renderVerticalTile } from "../../functions/renderVerticalTile";
import { OrUndefined } from "../../aliases/types/OrUndefined";
import { TileEntity } from "../../aliases/interfaces/TileEntity";
import { SimplefiedMovieItem } from "../../aliases/interfaces/movie.types";
interface TitleData {
    text: string;
    isPageTitle: boolean;
}
interface TilesListSectionProps {
    list: OrUndefined<TileEntity[]>;
    titleData: TitleData;
};

export const TilesListSection = ({ list, titleData }: TilesListSectionProps) => {
    const isMoviesList = (list: TileEntity[]): list is SimplefiedMovieItem[] => {
        return list?.length > 0 && "title" in list[0];
    };

    return (
        <>
            {
                (list && list.length > 0) && (
                    <>
                        <SectionHeader text={titleData.text} setAsPageTitle={titleData.isPageTitle} />
                        <TilesList $moreItems={isMoviesList(list) ? false : true}>
                            {list?.map((item) => renderVerticalTile(item))}
                        </TilesList>
                    </>
                )
            }
        </>
    );
};