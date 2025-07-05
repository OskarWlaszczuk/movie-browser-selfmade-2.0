import { TilesList } from "./styled";
import { SectionHeader } from "../SectionHeader";
import { VerticalTile } from "./VerticalTile";
import { PersonEntity, TileEntity } from "../../aliases/interfaces/TileEntity";
import { TilesListSectionProps } from "../../aliases/interfaces/TilesListSectionProps";
import { nanoid } from "@reduxjs/toolkit";


export const TilesListSection = ({ list, titleData }: TilesListSectionProps) => {
    const isPersonEntityList = (item: TileEntity): item is PersonEntity => (
        !!item && "name" in item
    );
    return (
        <>
            {
                (list && list.length > 0) && (
                    <section>
                        <SectionHeader text={titleData.text} setAsPageTitle={titleData.isPageTitle} />
                        <TilesList $moreItems={isPersonEntityList(list?.[0]) ? true : false}>
                            {list?.map((item) => (
                                <VerticalTile
                                    key={nanoid()}
                                    tileEntity={item}
                                />
                            ))}
                        </TilesList>
                    </section>
                )
            }
        </>
    );
};