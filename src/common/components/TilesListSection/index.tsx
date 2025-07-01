import { TilesList } from "./styled";
import { SectionHeader } from "../SectionHeader";
import { VerticalTile } from "./VerticalTile";
import { TileEntity } from "../../aliases/interfaces/TileEntity";
import { SimplefiedMovieItem } from "../../aliases/interfaces/movie.types";
import { TilesListSectionProps } from "../../aliases/interfaces/TilesListSectionProps";
import { nanoid } from "@reduxjs/toolkit";


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
                            {list?.map((item) => (
                                <VerticalTile
                                    key={nanoid()}
                                    tileEntity={item}
                                />
                            ))}
                        </TilesList>
                    </>
                )
            }
        </>
    );
};