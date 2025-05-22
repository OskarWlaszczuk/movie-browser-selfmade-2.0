import { JSX } from "react";
import { TilesList } from "./styled";
import { Movie } from "../../aliases/interfaces/Movie";
import { Person } from "../../aliases/interfaces/Person";
import { SectionHeader } from "../SectionHeader";

type RenderListItem<ListItem> = (item: ListItem) => JSX.Element;

interface TitleData {
    text: string;
    isPageTitle: boolean;
}

interface TilesListSectionProps<ListItem extends Movie | Person> {
    list: ListItem[];
    titleData: TitleData;
    renderListItem: RenderListItem<ListItem>;
};

export const TilesListSection = <ListItem extends Movie | Person>({
    list,
    titleData,
    renderListItem,
}: TilesListSectionProps<ListItem>) => (
    <>
        <SectionHeader text={titleData.text} setAsPageTitle={titleData.isPageTitle} />
        <TilesList>
            {list.map((item) => renderListItem(item))}
        </TilesList>
    </>
);